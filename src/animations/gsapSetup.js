import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, useGSAP };

// Ponto único de decisão desktop / mobile / reduced-motion.
// Em `desktop` e `mobile` o movimento está ativo; em `reduce` o conteúdo fica
// no estado final (nenhum estado inicial "escondido" é aplicado).
export function withMotion(scope, { desktop, mobile, reduce }) {
  const mm = gsap.matchMedia();
  mm.add(
    {
      desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
      reduce: "(prefers-reduced-motion: reduce)",
    },
    (ctx) => {
      const { desktop: d, mobile: m, reduce: r } = ctx.conditions;
      if (r) return reduce?.(scope);
      if (d) return (desktop ?? mobile)?.(scope);
      if (m) return (mobile ?? desktop)?.(scope);
    },
    scope,
  );
  return mm;
}
