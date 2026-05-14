export default function GrainOverlay() {
  return (
    <>
      <svg
        width="0"
        height="0"
        aria-hidden
        className="grain-svg"
        style={{ position: "absolute" }}
      >
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div className="grain-overlay" aria-hidden />
    </>
  );
}
