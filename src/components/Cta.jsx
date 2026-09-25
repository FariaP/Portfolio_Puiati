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

      <div className="cta-social">
        <a href="https://www.instagram.com/lpuiati/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
          </svg>
        </a>
        <a href="mailto:lucasvideomaker278@gmail.com" aria-label="E-mail">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>
      </div>

      <p className="cta-foot" data-foot>© {new Date().getFullYear()} Lucas Puiati — Filmmaker</p>
    </section>
  );
}
