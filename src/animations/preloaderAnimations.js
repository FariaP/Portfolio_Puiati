import { gsap, withMotion } from "./gsapSetup";

const ISO = [6400, 3200, 1600, 800, 400, 200, 100];
const pad = (n, l = 2) => String(n).padStart(l, "0");

// Sequência: foco caçando (0→100%) → trava → flash → obturador abre → site.
// Chama onDone() no instante em que o obturador começa a abrir (hero começa junto).
export function preloaderAnimations(root, onDone) {
  const $ = (s) => root.querySelector(s);
  const q = {
    count: $("[data-count]"), bar: $("[data-bar]"), mark: $("[data-mark]"), ring: $("[data-ring]"),
    frame: $("[data-frame]"), hud: $("[data-hud]"), flash: $("[data-flash]"), top: $("[data-top]"),
    bottom: $("[data-bottom]"), line: $("[data-line]"), tc: $("[data-tc]"), iso: $("[data-iso]"), focus: $("[data-focus]"),
  };
  let started = false;

  const start = () => {
    if (started) return;
    started = true;
    onDone();
  };
  const finish = () => {
    start();
    root.style.display = "none";
    document.body.classList.remove("is-locked");
  };

  return withMotion(root, {
    reduce: () => {
      gsap.to(root, { opacity: 0, duration: 0.3, onComplete: finish });
    },
    desktop: () => run(1),
    mobile: () => run(0.8),
  });

  function run(speed) {
    const state = { n: 0 };
    let isoIndex = -1;

    const loaded = new Promise((res) =>
      document.readyState === "complete" ? res() : window.addEventListener("load", res, { once: true }),
    );

    const update = () => {
      const n = Math.round(state.n);
      q.count.textContent = pad(n, 3);
      const frames = Math.round(state.n * 0.576); // 24 fps, corre junto com o progresso (~2,4 s)
      q.tc.textContent = `00:00:${pad(Math.floor(frames / 24) % 60)}:${pad(frames % 24)}`;
      const i = Math.min(ISO.length - 1, Math.floor((state.n / 100) * ISO.length));
      if (i !== isoIndex) {
        isoIndex = i;
        q.iso.textContent = `ISO ${ISO[i]}`;
      }
    };

    const tl = gsap.timeline({ paused: true });

    // 1) foco caçando: o quadro converge, o anel gira, o contador sobe
    tl.fromTo(q.hud, { opacity: 0 }, { opacity: 1, duration: 0.6 * speed, ease: "power1.out" }, 0)
      .fromTo(q.mark, { opacity: 0, letterSpacing: "0.6em" }, { opacity: 1, letterSpacing: "0.3em", duration: 1.4 * speed, ease: "power2.out" }, 0.1)
      .fromTo(q.frame, { scale: 1.6, opacity: 0.25 }, { scale: 1.12, opacity: 1, duration: 2.3 * speed, ease: "power2.inOut" }, 0)
      .to(state, { n: 100, duration: 2.4 * speed, ease: "power1.inOut", onUpdate: update }, 0)
      .to(q.ring, { rotation: 540, svgOrigin: "100 100", duration: 2.4 * speed, ease: "power2.out" }, 0)
      .to(q.bar, { scaleX: 1, duration: 2.4 * speed, ease: "power1.inOut" }, 0)

      // 2) foco travado (dourado)
      .to(q.frame, { scale: 1, duration: 0.35, ease: "power3.out" }, ">-0.05")
      .add(() => {
        root.classList.add("is-focused");
        q.focus.textContent = "Foco travado";
      }, "<")
      .to({}, { duration: 0.4 }) // respiro antes do disparo

      // 3) disparo: flash branco cobre tudo
      .to(q.flash, { opacity: 1, duration: 0.07, ease: "none" })
      .set(q.hud, { opacity: 0 })
      .addLabel("open")

      // 4) o flash se dissipa enquanto as metades do obturador se abrem
      .add(start, "open")
      .to(q.flash, { opacity: 0, duration: 0.8, ease: "power2.out" }, "open")
      .fromTo(q.line, { opacity: 1, scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.out" }, "open")
      .to(q.top, { yPercent: -100, duration: 1.2 * speed, ease: "expo.inOut" }, "open+=0.12")
      .to(q.bottom, { yPercent: 100, duration: 1.2 * speed, ease: "expo.inOut" }, "open+=0.12")
      .to(q.line, { opacity: 0, duration: 0.5, ease: "power1.in" }, "open+=0.35")
      .add(finish);

    loaded.then(() => tl.play());
  }
}
