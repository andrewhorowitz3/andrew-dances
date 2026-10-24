import Image from 'next/image'
import type { DanceGroup } from '@/lib/content'
import { formatMonthYear } from '@/lib/format'
import { LevelTrack } from './level-track'

export function DanceGroupSection({ group, index }: { group: DanceGroup; index: number }) {
  return (
    <section
      id={group.id}
      aria-labelledby={`${group.id}-heading`}
      className="scroll-mt-20 border-b border-foreground/10 last:border-b-0"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-serif text-lg italic text-foreground/50">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h2 id={`${group.id}-heading`} className="mt-2 text-5xl tracking-tight md:text-6xl">
              {group.name}
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-foreground/70">{group.description}</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden md:col-span-5">
            <Image
              src={group.image}
              alt=""
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </div>

        <ul className="mt-12 grid gap-px border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {group.dances.map((dance) => (
            <li key={dance.name} className="flex flex-col bg-background p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-3xl">{dance.name}</h3>
                <span className="text-xs uppercase tracking-[0.15em] text-foreground/50">
                  {`Since ${formatMonthYear(dance.started)}`}
                </span>
              </div>
              {dance.note && (
                <p className="mt-1 font-serif italic text-foreground/60">{dance.note}</p>
              )}
              <div className="mt-6">
                <LevelTrack level={dance.level} />
              </div>
              <div className="mt-6 flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                  Working on
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {dance.workingOn.map((item) => (
                    <li key={item} className="flex gap-3 leading-snug">
                      <span className="mt-2 h-px w-3 shrink-0 bg-brand" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
