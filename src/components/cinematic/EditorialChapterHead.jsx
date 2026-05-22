import { KineticBlock, KineticCopy, KineticHeadline, KineticRitual } from './TypographyKinetic'

const CHAPTER_INDEX = {
  programs: 'II',
  journey: 'III',
  facility: 'IV',
  access: 'V',
}

/** Editorial chapter opener — magazine pacing, mythic restraint */
export default function EditorialChapterHead({
  sceneId,
  ritual,
  headline,
  subline,
  lines,
  className = '',
}) {
  const index = CHAPTER_INDEX[sceneId]

  return (
    <KineticBlock className={`editorial-chapter-head max-w-2xl ${className}`.trim()} sceneId={sceneId}>
      {index ? <span className="editorial-chapter-index">Chapter {index}</span> : null}
      <KineticRitual className="section-ritual-gap" sceneId={sceneId}>
        {ritual}
      </KineticRitual>
      <KineticHeadline
        sceneId={sceneId}
        lines={lines}
        className="headline-chapter headline-emotional font-display section-headline-gap text-[var(--platinum)]"
      >
        {lines ? undefined : headline}
      </KineticHeadline>
      {subline ? (
        <KineticCopy sceneId={sceneId} className="copy-lead editorial-copy-lead">
          {subline}
        </KineticCopy>
      ) : null}
    </KineticBlock>
  )
}
