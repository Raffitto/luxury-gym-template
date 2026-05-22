import { aetherisConfig } from '../../data/aetherisConfig'
import { landingConfig } from '../../data/landingConfig'
import { routes } from '../../design-system/tokens'
import { useIsPhone } from '../../hooks/useIsPhone'
import CinematicAtmosphere from '../cinematic/CinematicAtmosphere'
import EditorialChapterHead from '../cinematic/EditorialChapterHead'
import FilmChapter from '../cinematic/FilmChapter'
import FilmFrame from '../cinematic/FilmFrame'
import SwipeableSceneCards from '../cinematic/SwipeableSceneCards'
import SceneCard from '../cinematic/SceneCard'
import HorizontalSceneRail from '../cinematic/HorizontalSceneRail'

export default function ProgramsScene() {
  const { programs } = landingConfig
  const { classes } = aetherisConfig
  const phone = useIsPhone()

  return (
    <FilmChapter
      id="programs"
      className="landing-scene--programs landing-scene--programs-fast"
      depthIndex={2}
    >
      {!phone ? <CinematicAtmosphere intensity="section" /> : null}
      <div className="landing-scene-inner landing-scene-inner--editorial chamber-tight">
        <EditorialChapterHead
          sceneId="programs"
          ritual={programs.ritual}
          headline={programs.headline}
          subline={programs.subline}
        />

        <div className="swipeable-scenes-bleed mt-10 lg:hidden">
          <SwipeableSceneCards nativeTouch className="swipeable-scenes--programs">
            {classes.map((program, i) => (
              <SceneCard
                key={program.name}
                index={i + 1}
                priority={i < 2}
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
                  <FilmFrame aspect="cinematic">
                    <SceneCard
                      index={i + 1}
                      priority={i === 0}
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
