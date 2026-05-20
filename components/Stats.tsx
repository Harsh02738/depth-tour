"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { num: 200, suffix: "+", label: "Scans Delivered"      },
  { num: 0,   suffix: "",   label: "Competitors in India" },
  { num: 2,   suffix: "h",  label: "Booking to Live Link" },
  { num: 100, suffix: "%",  label: "Browser-Based"        },
];

function Counter({
  num,
  suffix,
  duration = 1800,
}: {
  num: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref     = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (num === 0) { setCount(0); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = num / (duration / 16);
          const id = setInterval(() => {
            current += step;
            if (current >= num) {
              setCount(num);
              clearInterval(id);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, duration]);

  return (
    <span
      ref={ref}
      className="font-bold tabular-nums"
      style={{
        fontSize: "clamp(52px, 7vw, 88px)",
        lineHeight: 1,
        background: "linear-gradient(135deg, #c4a882, #f5f2ee)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: "#0d0c0b",
        borderTop: "1px solid rgba(196,168,130,0.07)",
        borderBottom: "1px solid rgba(196,168,130,0.07)",
      }}
    >
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(196,168,130,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderRadius: "20px", overflow: "hidden" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-10 px-6 text-center"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(196,168,130,0.07)"
                    : "none",
                borderBottom:
                  i < 2 ? "1px solid rgba(196,168,130,0.07)" : "none",
              }}
            >
              <Counter
                num={s.num}
                suffix={s.suffix}
                duration={1600 + i * 200}
              />
              <p
                className="text-xs font-medium tracking-widest uppercase mt-3"
                style={{ color: "#444" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
