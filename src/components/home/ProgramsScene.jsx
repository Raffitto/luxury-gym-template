import { aetherisConfig } from '../../data/aetherisConfig'
import { landingConfig } from '../../data/landingConfig'
import { routes } from '../../design-system/tokens'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import FilmChapter from '../cinematic/FilmChapter'
import FilmFrame from '../cinematic/FilmFrame'
import SwipeableSceneCards from '../cinematic/SwipeableSceneCards'
import SceneCard from '../cinematic/SceneCard'
import HorizontalSceneRail from '../cinematic/HorizontalSceneRail'
import { KineticBlock, KineticCopy, KineticHeadline, KineticRitual } from '../cinematic/TypographyKinetic'

export default function ProgramsScene() {
  const { programs } = landingConfig
  const { classes } = aetherisConfig

  return (
    <FilmChapter id="programs" className="landing-scene--programs env-chamber" depthIndex={2}>
      <CinematicAtmosphere intensity="section" />
      <div className="landing-scene-inner chamber-tight">
        <KineticBlock className="max-w-2xl">
          <KineticRitual className="section-ritual-gap">{programs.ritual}</KineticRitual>
          <KineticHeadline className="headline-chapter headline-emotional font-display section-headline-gap text-[var(--platinum)]">
            {programs.headline}
          </KineticHeadline>
          <KineticCopy className="copy-lead mt-6 max-w-xl">{programs.subline}</KineticCopy>
        </KineticBlock>

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
          <HorizontalSceneRail label="Move through the continuum →">
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
    </FilmChapter>
  )
}
