import { gsap, withMotion } from "./gsapSetup";

// Sequência do hero. Retorna uma timeline pausada; o componente dá play() após o preloader.
export function createHeroIntro(hero) {
  const $ = (s) => hero.querySelector(s);
  const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

  withMotion(hero, {
    desktop: () => build(1),
    mobile: () => build(0.75),
    reduce: () => {},
  });

  function build(speed) {
    const d = (n) => n * speed;
    gsap.set([$("[data-label]"), $("[data-name]"), $("[data-role]"), $("[data-cta]"), $("[data-scroll]")], { opacity: 0 });
    gsap.set($("[data-headline]"), { clipPath: "inset(0 0 100% 0)" });

    tl.fromTo($("[data-media]"), { opacity: 0, scale: 1.15 }, { opacity: 1, scale: 1, duration: d(2.4), ease: "power2.out" }, 0)
      .fromTo($("[data-overlay]"), { opacity: 0 }, { opacity: 1, duration: d(1.6), ease: "power1.inOut" }, 0.3)
      .fromTo($("[data-label]"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: d(0.9) }, 1)
      .fromTo($("[data-name]"), { opacity: 0, letterSpacing: "0.45em", y: 24 }, { opacity: 1, letterSpacing: "0.12em", y: 0, duration: d(1.8) }, 1.3)
      .fromTo($("[data-role]"), { opacity: 0, letterSpacing: "1em" }, { opacity: 1, letterSpacing: "0.5em", duration: d(1.6) }, 1.9)
      .fromTo($("[data-headline]"), { clipPath: "inset(0 0 100% 0)", y: 16 }, { clipPath: "inset(0 0 0% 0)", y: 0, duration: d(1.2) }, 2.5)
      .fromTo($("[data-cta]"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: d(0.9) }, 3.1)
      .fromTo($("[data-scroll]"), { opacity: 0 }, { opacity: 1, duration: d(0.9) }, 3.5);
  }
  return tl;
}

// Parallax sutil do vídeo + escurecimento que conduz ao silêncio do manifesto.
export function heroParallax(hero) {
  const $ = (s) => hero.querySelector(s);
  return withMotion(hero, {
    desktop: () => scrub(12),
    mobile: () => scrub(5),
    reduce: () => {},
  });

  function scrub(yPercent) {
    gsap
      .timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } })
      .to($("[data-parallax]"), { yPercent, ease: "none" }, 0)
      .to($("[data-shade]"), { opacity: 0.85, ease: "none" }, 0)
      .to($("[data-content]"), { y: -40, opacity: 0.2, ease: "none" }, 0);
  }
}
