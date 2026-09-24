import { gsap, withMotion } from "./gsapSetup";

const brl = (n) => Math.round(n).toLocaleString("pt-BR");

// Investimento: cabeçalho e serviço adicional entram ao chegar na seção; os planos têm
// gatilho próprio (o destaque por último, com o brilho acendendo e os preços contando).
export function plansAnimations(section) {
  const $ = (s) => section.querySelector(s);
  const $$ = (s) => [...section.querySelectorAll(s)];

  return withMotion(section, {
    desktop: () => build(1),
    mobile: () => build(0.75),
    reduce: () => {},
  });

  function build(speed) {
    gsap
      .timeline({ scrollTrigger: { trigger: section, start: "top 60%", once: true } })
      .fromTo($$("[data-phead] > *"), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: speed, ease: "power3.out", stagger: 0.12 }, 0);

    gsap
      .timeline({ scrollTrigger: { trigger: $("[data-addon]"), start: "top 75%", once: true } })
      .fromTo($$("[data-ahead] > *"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 * speed, ease: "power3.out", stagger: 0.1 }, 0)
      .fromTo($$("[data-aimg]"), { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.3 * speed, ease: "power3.inOut", stagger: 0.18 }, 0.2)
      .fromTo($$("[data-aimg] img"), { scale: 1.12 }, { scale: 1, duration: 1.8 * speed, ease: "power2.out", stagger: 0.18 }, 0.2)
      .fromTo($("[data-afoot]"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9 * speed, ease: "power2.out" }, 1);

    const cards = $$("[data-plan]");
    const featured = $("[data-plan].is-featured");
    const others = cards.filter((c) => c !== featured);

    const tl = gsap.timeline({ scrollTrigger: { trigger: $(".plans-grid"), start: "top 75%", once: true } });
    tl.fromTo(others, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.1 * speed, ease: "power3.out", stagger: 0.15 }, 0)
      .fromTo(featured, { opacity: 0, y: 80, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 1.3 * speed, ease: "power3.out" }, 0.4)
      .fromTo($("[data-fglow]"), { opacity: 0 }, { opacity: 1, duration: 1.8 * speed, ease: "power2.out" }, 0.8);

    $$("[data-price]").forEach((el, i) => {
      const value = Number(el.dataset.value);
      const state = { v: 0 };
      el.textContent = "0";
      tl.to(state, { v: value, duration: 1.6 * speed, ease: "power2.out", onUpdate: () => (el.textContent = brl(state.v)) }, 0.4 + i * 0.15);
    });
  }
}
