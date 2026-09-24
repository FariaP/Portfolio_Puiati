import { useRef } from "react";
import { useGSAP } from "../animations/gsapSetup";
import { ctaAnimations } from "../animations/ctaAnimations";
import { CLIPS, CONTACT_URL } from "../data";
import VideoBg from "./VideoBg.jsx";

export default function Cta() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = ctaAnimations(root.current);
    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="cta has-vbg" id="contato" ref={root}>
      <VideoBg src={CLIPS.filme3} dim={0.45} />
      <div className="cta-glow" data-glow aria-hidden="true" />
      <h2 className="cta-title">
        <span className="mask"><span data-cline>Vamos transformar</span></span>
        <span className="mask"><span data-cline>sua história <em>em filme?</em></span></span>
      </h2>

      <a className="btn" href={CONTACT_URL} target="_blank" rel="noopener noreferrer" data-btn>
        <span className="btn-fill" aria-hidden="true" />
        <span className="btn-text">FALE COM O LUCAS</span>
        <span className="btn-arrow" aria-hidden="true">→</span>
      </a>

      <p className="cta-foot" data-foot>© {new Date().getFullYear()} Lucas Puiati — Filmmaker</p>
    </section>
  );
}
