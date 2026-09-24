import { useRef } from "react";
import { CLIPS } from "../data";
import VideoBg from "./VideoBg.jsx";
import { useGSAP } from "../animations/gsapSetup";
import { manifestoAnimations } from "../animations/manifestoAnimations";

export default function Manifesto() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = manifestoAnimations(root.current);
    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="manifesto has-vbg" ref={root}>
      <VideoBg src={CLIPS.teaser} dim={0.22} />
      <p className="manifesto-text">
        <span data-line>Há momentos que passam.</span>
        <span data-line>Há momentos que <em>permanecem.</em></span>
      </p>
    </section>
  );
}
