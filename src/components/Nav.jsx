import { useEffect, useRef } from "react";
import { useGSAP } from "../animations/gsapSetup";
import { createNavIntro, navigationAnimations } from "../animations/navigationAnimations";

export default function Nav({ ready }) {
  const nav = useRef(null);
  const intro = useRef(null);

  useGSAP(() => {
    intro.current = createNavIntro(nav.current);
    const mm = navigationAnimations(nav.current);
    return () => mm.revert();
  }, { scope: nav });

  useEffect(() => {
    if (ready) intro.current?.play();
  }, [ready]);

  return (
    <header className="nav" ref={nav}>
      <a href="#top" className="nav-logo">LUCAS PUIATI</a>
      <nav className="nav-links" aria-label="Principal">
        <a href="#sobre">Sobre</a>
        <a href="#filmes">Filmes</a>
        <a href="#processo">Processo</a>
        <a href="#investimento">Investimento</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
