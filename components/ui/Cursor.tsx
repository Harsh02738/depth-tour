"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cur-dot";
    ring.className = "cur-ring";
    document.body.append(dot, ring);

    let mx = -200,
      my = -200,
      rx = -200,
      ry = -200;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const onEnter = () => ring.classList.add("cur-hover");
    const onLeave = () => ring.classList.remove("cur-hover");

    const attachListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    const loop = () => {
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
