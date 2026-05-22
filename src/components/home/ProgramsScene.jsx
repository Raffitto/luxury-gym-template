import { aetherisConfig } from '../../data/aetherisConfig'
import { landingConfig } from '../../data/landingConfig'
import { routes } from '../../design-system/tokens'
import RitualLabel from '../ui/RitualLabel'
import ChamberReveal from '../ui/ChamberReveal'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import FilmFrame from '../cinematic/FilmFrame'
import SwipeableSceneCards from '../cinematic/SwipeableSceneCards'
import SceneCard from '../cinematic/SceneCard'
import HorizontalSceneRail from '../cinematic/HorizontalSceneRail'

export default function ProgramsScene() {
  const { programs } = landingConfig
  const { classes } = aetherisConfig

  return (
    <section id="programs" className="landing-scene landing-scene--programs env-chamber relative overflow-hidden">
      <CinematicAtmosphere intensity="section" />
      <div className="landing-scene-inner chamber-tight">
        <ChamberReveal>
          <RitualLabel>{programs.ritual}</RitualLabel>
          <h2 className="headline-chamber font-display mt-5 text-[var(--platinum)]">
            {programs.headline}
          </h2>
          <p className="body-measured mt-5 max-w-xl">{programs.subline}</p>
        </ChamberReveal>

        <div className="swipeable-scenes-bleed mt-10 lg:hidden">
          <SwipeableSceneCards>
            {classes.map((program, i) => (
              <SceneCard
                key={program.name}
                index={i + 1}
                image={program.image}
                alt={program.image.alt}
                title={program.name}
                meta={`${program.duration} · ${program.intensity}`}
                description={program.desc}
                href={routes.classes}
              />
            ))}
          </SwipeableSceneCards>
        </div>

        <div className="mt-12 hidden lg:block">
          <HorizontalSceneRail label="Drag the continuum →">
            <div className="horizontal-scene-strip">
              {classes.map((program, i) => (
                <div key={program.name} className="horizontal-scene-item">
                  <FilmFrame aspect="cinematic" delay={i * 0.06}>
                    <SceneCard
                      index={i + 1}
                      image={program.image}
                      alt={program.image.alt}
                      title={program.name}
                      meta={`${program.duration} · ${program.intensity}`}
                      description={program.desc}
                      href={routes.classes}
                    />
                  </FilmFrame>
                </div>
              ))}
            </div>
          </HorizontalSceneRail>
        </div>
      </div>
    </section>
  )
}
