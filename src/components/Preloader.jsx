import { useRef } from "react";
import { useGSAP } from "../animations/gsapSetup";
import { preloaderAnimations } from "../animations/preloaderAnimations";

// Visor de câmera: o foco "caça" enquanto carrega, trava em 100%, o flash dispara
// e as duas metades do obturador se abrem revelando o site.
export default function Preloader({ onDone }) {
  const root = useRef(null);

  useGSAP(() => {
    const mm = preloaderAnimations(root.current, onDone);
    return () => mm.revert();
  }, { scope: root });

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="pl-half pl-top" data-top />
      <div className="pl-half pl-bottom" data-bottom />

      <div className="pl-hud" data-hud>
        <div className="pl-info pl-tl">
          <span className="pl-rec"><i />REC</span>
          <span data-tc>00:00:00:00</span>
        </div>
        <div className="pl-info pl-tr"><span>4K</span><span>24 FPS</span></div>
        <div className="pl-info pl-bl"><span data-iso>ISO 6400</span><span>f/1.8</span></div>
        <div className="pl-info pl-br"><span><b data-count>000</b>%</span></div>

        <div className="pl-stage">
          <div className="pl-frame" data-frame>
            <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
            <svg className="pl-lens" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="100" cy="100" r="92" opacity="0.5" />
              <circle cx="100" cy="100" r="58" opacity="0.7" />
              <circle cx="100" cy="100" r="22" />
              <g data-ring>
                <circle cx="100" cy="100" r="76" strokeDasharray="2 7" strokeWidth="2" />
                <path d="M100 8v14M100 178v14M8 100h14M178 100h14" strokeWidth="1.5" />
              </g>
              <path d="M92 100h16M100 92v16" strokeWidth="1" />
            </svg>
          </div>
          <p className="pl-mark" data-mark>LUCAS PUIATI</p>
          <p className="pl-sub" data-focus>Ajustando foco</p>
        </div>

        <div className="pl-bar"><i data-bar /></div>
      </div>

      <div className="pl-line" data-line />
      <div className="pl-flash" data-flash />
    </div>
  );
}
