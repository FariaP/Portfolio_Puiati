import { gsap, withMotion } from "./gsapSetup";

// Fechamento: o brilho acende, a headline sobe por máscara e o botão surge por último.
// A microinteração de hover do botão é CSS (somente transform/cor).
export function ctaAnimations(section) {
  const $ = (s) => section.querySelector(s);
  return withMotion(section, {
    desktop: () => build(1),
    mobile: () => build(0.75),
    reduce: () => {},
  });

  function build(speed) {
    gsap
      .timeline({ scrollTrigger: { trigger: section, start: "top 60%", once: true } })
      .fromTo($("[data-glow]"), { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 2.2 * speed, ease: "power2.out" }, 0)
      .fromTo(section.querySelectorAll("[data-cline]"), { yPercent: 110 }, { yPercent: 0, duration: 1.3 * speed, ease: "expo.out", stagger: 0.16 }, 0.2)
      .fromTo($("[data-btn]"), { opacity: 0, y: 20, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 1 * speed, ease: "power3.out" }, 1.1)
      .fromTo($("[data-foot]"), { opacity: 0 }, { opacity: 1, duration: 1 * speed }, 1.5);
  }
}
