import { gsap, withMotion } from "./gsapSetup";

// A linha da timeline cresce com o scroll; cada etapa acende quando a linha chega nela.
export function processAnimations(section) {
  return withMotion(section, {
    desktop: () => build(16),
    mobile: () => build(0),
    reduce: () => {},
  });

  function build(offset) {
    const steps = [...section.querySelectorAll("[data-step]")];
    const n = steps.length;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section.querySelector("[data-steps]"), start: "top 65%", end: "bottom 65%", scrub: 0.6 },
    });

    tl.fromTo(section.querySelector("[data-line]"), { scaleY: 0 }, { scaleY: 1, ease: "none", duration: n }, 0);
    steps.forEach((step, i) => {
      tl.fromTo(step, { opacity: 0.2, y: i ? offset : 0 }, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, Math.max(0, (n * i) / (n - 1) - 0.4));
    });
  }
}
