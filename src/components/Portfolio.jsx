import { useRef } from "react";
import { useGSAP } from "../animations/gsapSetup";
import { portfolioAnimations } from "../animations/portfolioAnimations";
import { CLIPS, PROJECTS } from "../data";
import VideoBg from "./VideoBg.jsx";

const pad = (n) => String(n).padStart(2, "0");

export default function Portfolio() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = portfolioAnimations(root.current);
    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="portfolio has-vbg" id="filmes" ref={root}>
      <VideoBg src={CLIPS.curta} dim={0.28} />
      <div className="pf-head">
        <p className="label">Filmes selecionados</p>
      </div>

      <div className="pf-track" data-track>
        {PROJECTS.map((p, i) => (
          <article className="pf-slide" data-slide key={p.title}>
            <figure className="pf-media">
              <img src={p.image} alt={p.title} style={{ objectPosition: p.position }} data-pfimg loading="lazy" />
            </figure>
            <div className="pf-info" data-info>
              <span className="pf-num">{pad(i + 1)}</span>
              <p className="pf-meta">{p.category} — {p.year}</p>
              <h3>{p.title}</h3>
              <p className="pf-text">{p.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="pf-progress" aria-hidden="true">
        <span className="pf-count"><b data-current>01</b> / {pad(PROJECTS.length)}</span>
        <div className="pf-line"><i data-progress /></div>
      </div>
    </section>
  );
}
