const items = [
  "Residential",
  "Commercial",
  "Airbnb",
  "Event Venues",
  "Car Showrooms",
  "Offices",
  "Restaurants",
  "Luxury Apartments",
  "New Builds",
  "Student Housing",
];

export default function Ticker() {
  const repeated = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-5"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080808, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080808, transparent)" }}
      />

      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-xs font-mono tracking-[0.2em] uppercase mx-8 flex items-center gap-8"
            style={{ color: "#3a3a3a" }}
          >
            {item}
            <span style={{ color: "#222222" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
