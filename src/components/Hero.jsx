import { useEffect, useRef } from "react";
import { useGSAP } from "../animations/gsapSetup";
import { createHeroIntro, heroParallax } from "../animations/heroAnimations";
import { HERO } from "../data";

export default function Hero({ ready }) {
  const root = useRef(null);
  const intro = useRef(null);

  useGSAP(() => {
    intro.current = createHeroIntro(root.current);
    const mm = heroParallax(root.current);
    return () => mm.revert();
  }, { scope: root });

  useEffect(() => {
    if (ready) intro.current?.play();
  }, [ready]);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-parallax" data-parallax>
        <div className="hero-media" data-media>
          <img src={HERO.poster} alt="" className="hero-poster" />
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlaying={(e) => e.currentTarget.classList.add("is-on")}
            onError={(e) => (e.currentTarget.style.display = "none")}
          >
            <source src={HERO.video} type="video/mp4" onError={(e) => (e.currentTarget.parentNode.style.display = "none")} />
          </video>
        </div>
      </div>
      <div className="hero-overlay" data-overlay />
      <div className="hero-shade" data-shade />

      <div className="hero-content" data-content>
        <p className="label" data-label>Filmes de casamento &amp; histórias reais</p>
        <h1>
          <span className="hero-name" data-name>LUCAS PUIATI</span>
          <span className="hero-role" data-role>FILMMAKER</span>
        </h1>
        <p className="hero-headline" data-headline>Cada história merece ser vista como cinema.</p>
        <a className="link-line" href="#filmes" data-cta>Ver filmes</a>
      </div>

      <div className="hero-scroll" data-scroll aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
