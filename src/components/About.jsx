import { useRef } from "react";
import { useGSAP } from "../animations/gsapSetup";
import { aboutAnimations } from "../animations/aboutAnimations";
import { CLIPS, LUCAS_PHOTO, FEATURES } from "../data";
import VideoBg from "./VideoBg.jsx";
import Icon from "./Icons.jsx";

export default function About() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = aboutAnimations(root.current);
    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="about has-vbg" id="sobre" ref={root}>
      <VideoBg src={CLIPS.prewedding} dim={0.3} />
      <div className="about-frame" data-frame>
        <div className="about-parallax" data-parallax>
          <img src={LUCAS_PHOTO} alt="Lucas Puiati" data-img />
        </div>
      </div>
      <div className="about-text" data-text>
        <p className="label">Sobre</p>
        <h2>Olhar de cinema para o que é real.</h2>
        <p>
          Sou Lucas Puiati, filmmaker. Meu trabalho é observar com calma e registrar o que só acontece uma vez:
          o olhar antes do sim, a emoção que escapa, o silêncio entre uma música e outra.
        </p>
        <p>
          Cada filme é conduzido como uma pequena produção de cinema, com roteiro, luz, som e edição, para que
          você reviva a história e não apenas veja imagens.
        </p>
        <ul className="features">
          {FEATURES.map((f) => (
            <li className="feature" key={f.title}>
              <span className="feature-icon"><Icon name={f.icon} /></span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
