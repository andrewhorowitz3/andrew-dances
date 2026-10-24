import Link from 'next/link'
import { events } from '@/lib/content'
import { formatDate, isUpcoming } from '@/lib/format'

export function NextUp() {
  const next = events
    .filter((event) => isUpcoming(event.date))
    .sort((a, b) => a.date.localeCompare(b.date))[0]

  if (!next) return null

  return (
    <section aria-labelledby="next-up-heading" className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-background/60">
            <span className="size-2 rounded-full bg-brand" aria-hidden />
            Next on my dance card
          </p>
          <h2 id="next-up-heading" className="mt-4 text-4xl tracking-tight md:text-5xl">
            {next.title}
          </h2>
          <p className="mt-3 text-background/70">
            <time dateTime={next.date}>{formatDate(next.date, { weekday: 'long' })}</time>
            {` · ${next.location}`}
          </p>
        </div>
        <Link
          href="/events"
          className="inline-flex h-12 shrink-0 items-center self-start border border-background/60 px-6 text-sm font-medium tracking-wide transition-colors hover:border-brand hover:bg-brand md:self-auto"
        >
          All events
        </Link>
      </div>
    </section>
  )
}
