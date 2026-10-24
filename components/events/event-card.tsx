import Image from 'next/image'
import { MapPin, Award } from 'lucide-react'
import type { DanceEvent } from '@/lib/content'
import { formatDate } from '@/lib/format'

export function EventCard({ event, upcoming }: { event: DanceEvent; upcoming: boolean }) {
  return (
    <article className="group grid gap-6 border-t border-foreground/10 py-10 md:grid-cols-12 md:gap-10">
      <div className="relative aspect-[4/3] overflow-hidden bg-foreground md:col-span-5">
        <Image
          src={event.image}
          alt=""
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
        />
        {upcoming && (
          <span className="absolute left-4 top-4 bg-brand px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-foreground">
            Upcoming
          </span>
        )}
      </div>
      <div className="flex flex-col justify-center md:col-span-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.2em]">
          <span className="text-brand">{event.kind}</span>
          <time dateTime={event.date} className="text-foreground/60">
            {formatDate(event.date)}
          </time>
        </div>
        <h3 className="mt-3 text-3xl leading-tight md:text-4xl">{event.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-foreground/60">
          <MapPin className="size-4" aria-hidden />
          {event.location}
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-foreground/75">{event.recap}</p>
        {event.result && (
          <p className="mt-5 inline-flex items-center gap-2 self-start border border-foreground px-3 py-1.5 text-sm">
            <Award className="size-4 text-brand" aria-hidden />
            {event.result}
          </p>
        )}
      </div>
    </article>
  )
}
