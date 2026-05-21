export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div
      className={`section-header-gap mx-auto flex max-w-3xl flex-col gap-2 sm:gap-3 ${alignClass}`}
    >
      {eyebrow ? (
        <p className="font-display text-xs tracking-[0.22em] text-[var(--color-yellow)] uppercase sm:text-sm sm:tracking-[0.28em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[2rem] leading-[0.95] text-white uppercase sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-gray)] sm:text-base md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
