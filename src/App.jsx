import { useEffect, useState } from "react";
import { ScrollTrigger } from "./animations/gsapSetup";
import Preloader from "./components/Preloader.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Manifesto from "./components/Manifesto.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Process from "./components/Process.jsx";
import Impact from "./components/Impact.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Plans from "./components/Plans.jsx";
import Cta from "./components/Cta.jsx";

export default function App() {
  const [ready, setReady] = useState(false);

  // Imagens/fontes alteram a altura da página: recalcula os pontos do ScrollTrigger.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <Nav ready={ready} />
      <main>
        <Hero ready={ready} />
        <Manifesto />
        <About />
        <Portfolio />
        <Process />
        <Impact />
        <Testimonials />
        <Plans />
        <Cta />
      </main>
    </>
  );
}
