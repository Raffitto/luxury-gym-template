import { activeConfig } from '../data/activeConfig'
import SectionHeader from './ui/SectionHeader'
import SectionReveal from './ui/SectionReveal'

function TrainerAvatar({ name }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className="flex aspect-[5/4] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#111] text-2xl font-bold text-[var(--color-yellow)] sm:aspect-auto sm:h-28 sm:text-3xl"
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

export default function Trainers() {
  return (
    <SectionReveal id="trainers" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={activeConfig.sections.trainers.eyebrow}
          title={activeConfig.sections.trainers.title}
          subtitle={activeConfig.sections.trainers.subtitle}
        />

        <div className="flex flex-col gap-3 sm:gap-4 md:grid md:grid-cols-3 md:gap-5">
          {activeConfig.trainers.map((trainer) => (
            <article key={trainer.id} className="glass-card rounded-2xl p-5 sm:rounded-[var(--radius-xl)] sm:p-6">
              {trainer.image ? (
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="aspect-[5/4] w-full rounded-2xl object-cover object-top sm:aspect-auto sm:h-28"
                />
              ) : (
                <TrainerAvatar name={trainer.name} />
              )}
              <h3 className="mt-4 font-display text-xl text-white uppercase sm:mt-5 sm:text-2xl">
                {trainer.name}
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-wide text-[var(--color-yellow)] uppercase sm:text-sm">
                {trainer.specialty}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray)] sm:mt-3">
                {trainer.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
