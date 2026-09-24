import { useRef } from "react";
import { useGSAP } from "../animations/gsapSetup";
import { testimonialsAnimations } from "../animations/testimonialsAnimations";
import { CLIPS, TESTIMONIALS } from "../data";
import VideoBg from "./VideoBg.jsx";

export default function Testimonials() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = testimonialsAnimations(root.current);
    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="testimonials has-vbg" ref={root}>
      <VideoBg src={CLIPS.prewedding2} dim={0.26} />
      <p className="label">Depoimentos</p>
      <div className="quotes" data-quotes>
        {TESTIMONIALS.map((t) => (
          <figure className="quote" key={t.quote}>
            <i className="quote-rule" data-rule />
            <blockquote data-quote>
              <p>“{t.quote}”</p>
              <figcaption>{t.author}</figcaption>
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}
