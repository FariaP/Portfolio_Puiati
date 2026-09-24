import { gsap, withMotion } from "./gsapSetup";

// Reel horizontal: a seção fica pinned e o scroll vertical desloca a trilha.
// Mobile / reduced-motion: lista vertical simples (mobile ganha reveals leves).
export function portfolioAnimations(section) {
  const $ = (s) => section.querySelector(s);
  const $$ = (s) => [...section.querySelectorAll(s)];

  return withMotion(section, {
    desktop: () => horizontal(),
    mobile: () => stacked(),
    reduce: () => {},
  });

  function horizontal() {
    section.classList.add("is-horizontal");

    const track = $("[data-track]");
    const slides = $$("[data-slide]");
    const current = $("[data-current]");
    const bar = gsap.quickSetter($("[data-progress]"), "scaleX");
    const dist = () => track.scrollWidth - window.innerWidth;
    let index = 0;

    const move = gsap.to(track, {
      x: () => -dist(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + dist(),
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          bar(self.progress);
          const next = Math.round(self.progress * (slides.length - 1));
          if (next === index) return;
          index = next;
          current.textContent = String(index + 1).padStart(2, "0");
          gsap.fromTo(current, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.4, ease: "power2.out", overwrite: true });
        },
      },
    });

    slides.forEach((slide, i) => {
      // Parallax da imagem dentro do quadro, guiado pela posição horizontal do slide.
      gsap.fromTo(
        slide.querySelector("[data-pfimg]"),
        { xPercent: -7 },
        { xPercent: 7, ease: "none", scrollTrigger: { trigger: slide, containerAnimation: move, start: "left right", end: "right left", scrub: true } },
      );

      // Título e informações entram quando o slide chega ao terço central.
      gsap.fromTo(
        slide.querySelectorAll("[data-info] > *"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: i === 0
            ? { trigger: section, start: "top 60%", toggleActions: "play none none reverse" }
            : { trigger: slide, containerAnimation: move, start: "left 65%", toggleActions: "play none none reverse" },
        },
      );
    });

    return () => section.classList.remove("is-horizontal");
  }

  function stacked() {
    $$("[data-slide]").forEach((slide) => {
      gsap
        .timeline({ scrollTrigger: { trigger: slide, start: "top 80%", once: true } })
        .fromTo(slide.querySelector("[data-pfimg]"), { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }, 0)
        .fromTo(slide.querySelectorAll("[data-info] > *"), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power2.out" }, 0.25);
    });
  }
}
