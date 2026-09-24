import { gsap, withMotion } from "./gsapSetup";

// Imagem: clip-path + scale (+ parallax no desktop). Texto: entra de forma independente.
export function aboutAnimations(section) {
  const $ = (s) => section.querySelector(s);
  return withMotion(section, {
    desktop: () => build(1, true),
    mobile: () => build(0.7, false),
    reduce: () => {},
  });

  function build(speed, parallax) {
    const frame = $("[data-frame]");

    gsap
      .timeline({ scrollTrigger: { trigger: frame, start: "top 75%", once: true } })
      .fromTo(frame, { clipPath: "inset(12% 0 0 0)", opacity: 0 }, { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 1.4 * speed, ease: "power3.out" }, 0)
      .fromTo($("[data-img]"), { scale: 1.08 }, { scale: 1, duration: 1.8 * speed, ease: "power2.out" }, 0);

    gsap.fromTo(
      $("[data-text]").children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: speed,
        ease: "power2.out",
        stagger: 0.14,
        scrollTrigger: { trigger: $("[data-text]"), start: "top 75%", once: true },
      },
    );

    if (parallax) {
      gsap.fromTo(
        $("[data-parallax]"),
        { yPercent: -6 },
        { yPercent: 6, ease: "none", scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true } },
      );
    }
  }
}
