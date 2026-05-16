"use client";

type Cell = { v: string; good: boolean | null };

const rows: { feature: string; depth: Cell; matterport: Cell; t360: Cell }[] = [
  {
    feature: "True 3D depth",
    depth:      { v: "✓", good: true },
    matterport: { v: "✓", good: true },
    t360:       { v: "✗", good: false },
  },
  {
    feature: "Reflects glass & glossy floors",
    depth:      { v: "✓", good: true },
    matterport: { v: "✗", good: false },
    t360:       { v: "✗", good: false },
  },
  {
    feature: "Equipment needed from client",
    depth:      { v: "None", good: true },
    matterport: { v: "Expensive scanner", good: false },
    t360:       { v: "Camera + tripod", good: null },
  },
  {
    feature: "Monthly subscription",
    depth:      { v: "None", good: true },
    matterport: { v: "Required", good: false },
    t360:       { v: "Varies", good: null },
  },
  {
    feature: "Buyers download an app",
    depth:      { v: "No", good: true },
    matterport: { v: "Yes", good: false },
    t360:       { v: "No", good: true },
  },
  {
    feature: "Same-day delivery",
    depth:      { v: "✓", good: true },
    matterport: { v: "✗", good: false },
    t360:       { v: "✓", good: true },
  },
  {
    feature: "Captures outdoor spaces well",
    depth:      { v: "✓", good: true },
    matterport: { v: "✗", good: false },
    t360:       { v: "✗", good: false },
  },
  {
    feature: "100% browser-based",
    depth:      { v: "✓", good: true },
    matterport: { v: "Partial", good: null },
    t360:       { v: "✓", good: true },
  },
];

function CellDisplay({ cell, highlight }: { cell: Cell; highlight: boolean }) {
  const color =
    cell.good === true
      ? highlight
        ? "#34d399"
        : "#34d399"
      : cell.good === false
      ? "#ef4444"
      : "#666666";

  return (
    <td
      className="py-4 px-5 text-sm font-medium text-center"
      style={{ color, borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      {cell.v}
    </td>
  );
}

export default function Comparison() {
  return (
    <section
      className="py-32 px-6 relative overflow-x-auto"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#6366f1" }}
          >
            How it compares
          </p>
          <h2
            className="font-bold text-[#f5f0e8] tracking-tight leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
          >
            Why Gaussian Splatting
            <br />
            <span className="gradient-text">wins every comparison.</span>
          </h2>
        </div>

        <div className="reveal overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th
                  className="py-5 px-5 text-left text-xs font-semibold tracking-widest uppercase"
                  style={{
                    color: "#333",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: "#080808",
                    width: "38%",
                  }}
                >
                  Feature
                </th>
                {/* DepthTour — highlighted */}
                <th
                  className="py-5 px-5 text-center text-sm font-bold"
                  style={{
                    color: "#a5b4fc",
                    borderBottom: "1px solid rgba(99,102,241,0.3)",
                    background: "rgba(99,102,241,0.06)",
                    borderLeft: "1px solid rgba(99,102,241,0.2)",
                    borderRight: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  DepthTour
                  <span
                    className="block text-[10px] font-medium mt-0.5 tracking-widest uppercase"
                    style={{ color: "#6366f1" }}
                  >
                    Gaussian Splatting
                  </span>
                </th>
                <th
                  className="py-5 px-5 text-center text-sm font-semibold"
                  style={{
                    color: "#444",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: "#080808",
                  }}
                >
                  Matterport
                </th>
                <th
                  className="py-5 px-5 text-center text-sm font-semibold"
                  style={{
                    color: "#444",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: "#080808",
                  }}
                >
                  360° Tour
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="group">
                  <td
                    className="py-4 px-5 text-sm"
                    style={{
                      color: "#666",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      background: "#080808",
                    }}
                  >
                    {row.feature}
                  </td>
                  {/* DepthTour cell — highlighted column bg */}
                  <td
                    className="py-4 px-5 text-sm font-semibold text-center"
                    style={{
                      color: row.depth.good === true ? "#34d399" : row.depth.good === false ? "#ef4444" : "#666",
                      borderBottom: "1px solid rgba(99,102,241,0.12)",
                      background: "rgba(99,102,241,0.04)",
                      borderLeft: "1px solid rgba(99,102,241,0.15)",
                      borderRight: "1px solid rgba(99,102,241,0.15)",
                    }}
                  >
                    {row.depth.v}
                  </td>
                  <CellDisplay cell={row.matterport} highlight={false} />
                  <CellDisplay cell={row.t360} highlight={false} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#333" }}>
          Based on publicly available information as of 2026.
        </p>
      </div>
    </section>
  );
}
