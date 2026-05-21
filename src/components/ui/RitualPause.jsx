/** Breathing room between homepage sequences — ritual pacing, not decoration */
export default function RitualPause({ label }) {
  return (
    <div
      className="chamber-inner px-[var(--page-gutter)] py-10 md:py-14"
      aria-hidden={!label}
    >
      <div className="ritual-divider max-w-xs" />
      {label ? (
        <p className="font-ritual mt-5 text-[var(--ash)]">{label}</p>
      ) : null}
    </div>
  )
}
