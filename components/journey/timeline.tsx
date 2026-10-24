import Image from 'next/image'
import { milestones, type Milestone } from '@/lib/content'
import { formatDate } from '@/lib/format'
import { cn } from '@/lib/utils'

const kindLabels: Record<Milestone['kind'], string> = {
  lesson: 'Lesson',
  party: 'Dance party',
  'new-dance': 'New dance',
  checkout: 'Level check-out',
  performance: 'Performance',
  competition: 'Competition',
}

const highlightKinds: Milestone['kind'][] = ['checkout', 'performance', 'competition']

export function Timeline() {
  const sorted = [...milestones].sort((a, b) => a.date.localeCompare(b.date))
  const byYear = sorted.reduce<Record<string, Milestone[]>>((acc, milestone) => {
    const year = milestone.date.slice(0, 4)
    ;(acc[year] ??= []).push(milestone)
    return acc
  }, {})

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-12 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.15em] text-foreground/60">
        <span className="flex items-center gap-2">
          <span className="size-2.5 rounded-full border border-foreground bg-background" aria-hidden />
          Learning
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-brand" aria-hidden />
          Check-outs & performances
        </span>
      </div>

      {Object.entries(byYear).map(([year, items]) => (
        <section key={year} aria-labelledby={`year-${year}`} className="relative">
          <h2
            id={`year-${year}`}
            className="sticky top-16 z-10 bg-background/95 py-4 font-serif text-5xl italic tracking-tight backdrop-blur md:text-6xl"
          >
            {year}
          </h2>
          <ol className="relative ml-1.5 border-l border-foreground/15 pb-12">
            {items.map((milestone) => {
              const highlight = highlightKinds.includes(milestone.kind)
              return (
                <li key={milestone.date + milestone.title} className="relative pb-12 pl-8 last:pb-4 md:pl-12">
                  <span
                    aria-hidden
                    className={cn(
                      'absolute -left-[6.5px] top-1.5 size-3 rounded-full border',
                      highlight ? 'border-brand bg-brand' : 'border-foreground bg-background',
                    )}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <time
                      dateTime={milestone.date}
                      className="text-sm font-medium tracking-wide text-foreground/80"
                    >
                      {formatDate(milestone.date)}
                    </time>
                    <span
                      className={cn(
                        'text-xs uppercase tracking-[0.2em]',
                        highlight ? 'text-brand' : 'text-foreground/50',
                      )}
                    >
                      {kindLabels[milestone.kind]}
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl leading-snug md:text-3xl">{milestone.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-foreground/70">{milestone.description}</p>
                  {milestone.image && (
                    <div className="relative mt-6 aspect-[16/9] max-w-2xl overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 672px, 100vw"
                        className="object-cover grayscale"
                      />
                    </div>
                  )}
                </li>
              )
            })}
          </ol>
        </section>
      ))}

      <p className="border-t border-foreground/10 pt-10 text-center font-serif text-2xl italic text-foreground/70">
        {'…and the story keeps going.'}
      </p>
    </div>
  )
}
