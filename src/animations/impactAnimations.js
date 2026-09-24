import { gsap, withMotion } from "./gsapSetup";

// Tipografia acompanhando o scroll: as palavras acendem em sequência dentro de uma
// área sticky (CSS), com um deslocamento horizontal mínimo nas linhas.
export function impactAnimations(section) {
  return withMotion(section, {
    desktop: () => build(40),
    mobile: () => build(0),
    reduce: () => {},
  });

  function build(drift) {
    const words = section.querySelectorAll("[data-word]");
    const lines = section.querySelectorAll("[data-iline]");
    const total = 1 + (words.length - 1) * 0.2;

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: "top top", end: "bottom bottom", scrub: 0.5 },
    });

    tl.fromTo(words, { opacity: 0.12 }, { opacity: 1, duration: 1, ease: "none", stagger: 0.2 }, 0);
    if (drift) {
      lines.forEach((line, i) => tl.fromTo(line, { x: i % 2 ? drift : -drift }, { x: 0, duration: total, ease: "none" }, 0));
    }
    tl.to({}, { duration: 0.6 }); // pausa final: a frase completa respira antes de soltar o sticky
  }
}
