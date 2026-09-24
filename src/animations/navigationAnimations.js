import { gsap, ScrollTrigger, withMotion } from "./gsapSetup";

// Entrada discreta após o preloader.
export function createNavIntro(nav) {
  const tl = gsap.timeline({ paused: true });
  withMotion(nav, {
    desktop: () => {
      tl.from(nav.children, { opacity: 0, y: -12, duration: 0.9, ease: "power2.out", stagger: 0.1 });
    },
    reduce: () => {},
  });
  return tl;
}

// Esconde ao rolar para baixo, volta ao rolar para cima.
export function navigationAnimations(nav) {
  return withMotion(nav, {
    desktop: () => {
      const show = gsap.from(nav, { yPercent: -100, duration: 0.45, ease: "power2.out", paused: true }).progress(1);
      ScrollTrigger.create({
        start: 120,
        end: "max",
        onUpdate: (self) => (self.direction === -1 ? show.play() : show.reverse()),
      });
      ScrollTrigger.create({
        start: 80,
        end: "max",
        onToggle: (self) => nav.classList.toggle("is-solid", self.isActive),
      });
    },
    reduce: () => {},
  });
}
