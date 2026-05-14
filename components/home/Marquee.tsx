const items = [
  "Gaussian Splatting",
  "Digital Twins",
  "Drone Photogrammetry",
  "Interactive Tours",
  "Luxury Real Estate",
  "Architectural Visualization",
  "Immersive Experiences",
  "3D Reconstruction",
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "1.25rem 0",
      }}
    >
      <div className="flex animate-marquee" aria-hidden>
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-body font-light flex-shrink-0 flex items-center gap-8 pr-8"
            style={{ color: "#363636", fontSize: "0.8125rem", letterSpacing: "0.12em" }}
          >
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#c4a882",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
