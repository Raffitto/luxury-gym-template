export default function RitualField({ label, children, hint }) {
  return (
    <div className="ritual-field">
      <label className="font-ritual mb-3 block text-[var(--ash)]">{label}</label>
      {children}
      {hint ? <p className="mt-2 font-ritual text-[0.55rem] text-[var(--ash)]">{hint}</p> : null}
    </div>
  )
}
