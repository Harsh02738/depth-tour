"use client";

import { useRef, CSSProperties, ReactNode } from "react";

interface MagneticBtnProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function MagneticBtn({
  href,
  children,
  className = "",
  style,
}: MagneticBtnProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 16;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 16;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
    ref.current.style.transition = "none";
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
    ref.current.style.transition =
      "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}
