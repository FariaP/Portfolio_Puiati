import { useRef } from "react";
import { useGSAP } from "../animations/gsapSetup";
import { plansAnimations } from "../animations/plansAnimations";
import { CLIPS, PLANS, ADDON, contactUrl } from "../data";
import VideoBg from "./VideoBg.jsx";

const brl = (n) => n.toLocaleString("pt-BR");

export default function Plans() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = plansAnimations(root.current);
    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="plans has-vbg" id="investimento" ref={root}>
      <VideoBg src={CLIPS.curta2} dim={0.3} />
      <header className="plans-head" data-phead>
        <p className="label">Investimento</p>
        <h2>Planos pensados para <em>cada história.</em></h2>
        <p className="plans-sub">Três caminhos para eternizar o seu casamento, todos com a mesma dedicação e cuidado.</p>
      </header>

      <div className="plans-grid">
        {PLANS.map((p) => (
          <article className={"plan" + (p.featured ? " is-featured" : "")} data-plan key={p.name}>
            {p.featured && <span className="plan-glow" data-fglow aria-hidden="true" />}
            {p.featured && <span className="plan-badge">Mais escolhido</span>}

            <h3>{p.name}</h3>
            <p className="plan-tagline">{p.tagline}</p>

            <p className="plan-price">
              <span className="plan-cur">R$</span>
              <span data-price data-value={p.price}>{brl(p.price)}</span>
            </p>

            <ul className="plan-items">
              {p.items.map((it) => {
                const item = typeof it === "string" ? { text: it } : it;
                return (
                  <li className={item.bonus ? "is-bonus" : undefined} key={item.text}>
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m3 8.5 3 3 7-7" />
                    </svg>
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>

            <a
              className={"plan-btn" + (p.featured ? " is-solid" : "")}
              href={contactUrl(`Olá Lucas, tenho interesse no plano ${p.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero esse plano
            </a>
          </article>
        ))}
      </div>

      <div className="addon" data-addon>
        <header className="addon-head" data-ahead>
          <p className="label">{ADDON.label}</p>
          <h3>{ADDON.title}</h3>
          <p>{ADDON.text}</p>
        </header>

        <div className="addon-photos">
          {ADDON.images.map((src, i) => (
            <figure className="addon-photo" data-aimg key={src}>
              <img src={src} alt={`${ADDON.title}, foto ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="addon-foot" data-afoot>
          <div>
            <p className="addon-eyebrow">Adicione ao seu pacote</p>
            <p className="addon-price"><span className="plan-cur">R$</span> {brl(ADDON.price)},00</p>
            <p className="addon-note">{ADDON.note}</p>
          </div>
          <a
            className="plan-btn is-solid addon-btn"
            href={contactUrl(`Olá Lucas, quero consultar a disponibilidade da ${ADDON.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar disponibilidade <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
