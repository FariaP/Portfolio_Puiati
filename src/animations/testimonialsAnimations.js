import { gsap, withMotion } from "./gsapSetup";

// Tranquilo: uma linha fina se desenha e o texto surge por opacidade. Uma vez só.
export function testimonialsAnimations(section) {
  return withMotion(section, {
    desktop: () => build(1),
    mobile: () => build(0.7),
    reduce: () => {},
  });

  function build(speed) {
    const quotes = section.querySelectorAll("[data-quote]");
    gsap
      .timeline({ scrollTrigger: { trigger: section.querySelector("[data-quotes]"), start: "top 75%", once: true } })
      .fromTo(section.querySelectorAll("[data-rule]"), { scaleX: 0 }, { scaleX: 1, duration: 1.2 * speed, ease: "power2.inOut", stagger: 0.25 }, 0)
      .fromTo(quotes, { opacity: 0 }, { opacity: 1, duration: 1.4 * speed, ease: "power1.out", stagger: 0.25 }, 0.3);
  }
}
