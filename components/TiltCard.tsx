"use client";

import { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 16;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 16;
    ref.current.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.03)`;
    ref.current.style.transition = "none";
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
    ref.current.style.transition =
      "transform 0.65s cubic-bezier(0.23, 1, 0.32, 1)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.65s cubic-bezier(0.23, 1, 0.32, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
