import { useRef } from "react";
import { useGSAP } from "../animations/gsapSetup";
import { processAnimations } from "../animations/processAnimations";
import { CLIPS, STEPS } from "../data";
import VideoBg from "./VideoBg.jsx";

export default function Process() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = processAnimations(root.current);
    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="process has-vbg" id="processo" ref={root}>
      <VideoBg src={CLIPS.filme2} dim={0.3} />
      <header className="process-head">
        <p className="label">Processo</p>
        <h2>Da primeira conversa ao seu filme.</h2>
      </header>
      <ol className="steps" data-steps>
        <span className="steps-line" aria-hidden="true"><i data-line /></span>
        {STEPS.map((s, i) => (
          <li className="step" data-step key={s.title}>
            <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
