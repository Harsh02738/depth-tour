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
      className="border-y overflow-hidden py-4"
      style={{ borderColor: "#222222", background: "#0d0d0d" }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-xs font-mono tracking-widest uppercase mx-6"
            style={{ color: "#444444" }}
          >
            {item}
            <span className="mx-6 text-[#2a2a2a]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
