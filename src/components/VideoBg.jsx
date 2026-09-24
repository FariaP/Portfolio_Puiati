import { useEffect, useRef } from "react";

// Vídeo de fundo de uma seção. Só carrega e toca enquanto a seção está perto da tela,
// então no máximo um ou dois vídeos decodificam ao mesmo tempo (scroll fluido).
// O quadro é "sticky": o vídeo acompanha a viewport enquanto a seção rola.
export default function VideoBg({ src, dim = 0.3 }) {
  const wrap = useRef(null);
  const video = useRef(null);

  useEffect(() => {
    const v = video.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const show = () => v.classList.add("is-on");
    v.addEventListener("playing", show);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.getAttribute("src")) v.src = src;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "25% 0px" },
    );
    io.observe(wrap.current);

    return () => {
      io.disconnect();
      v.removeEventListener("playing", show);
    };
  }, [src]);

  return (
    <div className="vbg" ref={wrap} style={{ "--dim": dim }} aria-hidden="true">
      <div className="vbg-stick">
        <video ref={video} muted loop playsInline preload="none" tabIndex={-1} />
        <div className="vbg-vignette" />
      </div>
    </div>
  );
}
