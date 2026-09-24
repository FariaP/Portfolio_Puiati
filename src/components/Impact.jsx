import { useRef } from "react";
import { CLIPS } from "../data";
import VideoBg from "./VideoBg.jsx";
import { useGSAP } from "../animations/gsapSetup";
import { impactAnimations } from "../animations/impactAnimations";

const LINES = [
  { text: "Não registramos apenas momentos.", accent: [] },
  { text: "Criamos memórias que podem ser revividas.", accent: ["memórias", "revividas."] },
];

export default function Impact() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = impactAnimations(root.current);
    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="impact has-vbg" ref={root}>
      <VideoBg src={CLIPS.teaser2} dim={0.38} />
      <div className="impact-sticky">
        <p className="impact-text">
          {LINES.map((line) => (
            <span className="impact-line" data-iline key={line.text}>
              {line.text.split(" ").map((w, i) => (
                <span className={line.accent.includes(w) ? "is-accent" : undefined} data-word key={i}>{w} </span>
              ))}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
