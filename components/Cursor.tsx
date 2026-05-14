"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    // Don't mount on touch-only devices
    if (!window.matchMedia("(hover: hover)").matches) return;

    const dot  = document.createElement("div");
    const ring = document.createElement("div");
    dot.className  = "cur-dot";
    ring.className = "cur-ring";
    document.body.append(dot, ring);

    let mx = -200, my = -200;
    let rx = -200, ry = -200;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const onEnter = () => ring.classList.add("cur-hover");
    const onLeave = () => ring.classList.remove("cur-hover");

    const attach = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attach();

    // Re-attach after any dynamic content (form state changes etc)
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    let raf: number;
    const loop = () => {
      dot.style.transform  = `translate(${mx - 4}px,${my - 4}px)`;
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.transform = `translate(${rx - 18}px,${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      mo.disconnect();
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
