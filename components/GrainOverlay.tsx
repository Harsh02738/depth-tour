export default function GrainOverlay() {
  return (
    <>
      <svg
        width="0"
        height="0"
        aria-hidden={true}
        style={{ position: "absolute", pointerEvents: "none" }}
      >
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9997,
          opacity: 0.042,
          filter: "url(#grain-filter)",
          background: "#d0d0d0",
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
