import { gsap, withMotion } from "./gsapSetup";

// Silêncio: duas linhas surgem devagar, uma única vez, sem movimento atrelado ao scroll.
export function manifestoAnimations(section) {
  return withMotion(section, {
    desktop: () => reveal(1.8, 1.4),
    mobile: () => reveal(1.2, 1),
    reduce: () => {},
  });

  function reveal(duration, gap) {
    gsap
      .timeline({ scrollTrigger: { trigger: section, start: "top 55%", once: true } })
      .fromTo(section.querySelectorAll("[data-line]"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration, ease: "power1.out", stagger: gap });
  }
}
