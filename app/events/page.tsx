import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { EventCard } from '@/components/events/event-card'
import { events } from '@/lib/content'
import { isUpcoming } from '@/lib/format'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Events & Performances',
  description: 'Dance parties, showcases, and competitions — past recaps and what’s coming up.',
}

export default function EventsPage() {
  const upcoming = events
    .filter((event) => isUpcoming(event.date))
    .sort((a, b) => a.date.localeCompare(b.date))
  const past = events
    .filter((event) => !isUpcoming(event.date))
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <PageIntro
        eyebrow="Events & Performances"
        title="On the floor, under the lights."
        description="Dance parties, studio showcases, and competitions. Some nights I shine, some nights I forget a corner — every one of them is worth remembering."
        image="/images/dance-party.png"
        imageAlt="Couples dancing at a studio party under string lights"
      />

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        {upcoming.length > 0 && (
          <section aria-labelledby="upcoming-heading" className="mb-16">
            <h2 id="upcoming-heading" className="mb-2 text-4xl tracking-tight md:text-5xl">
              Coming up
            </h2>
            {upcoming.map((event) => (
              <EventCard key={event.date + event.title} event={event} upcoming />
            ))}
          </section>
        )}

        <section aria-labelledby="past-heading">
          <h2 id="past-heading" className="mb-2 text-4xl tracking-tight md:text-5xl">
            Looking back
          </h2>
          {past.map((event) => (
            <EventCard key={event.date + event.title} event={event} upcoming={false} />
          ))}
        </section>
      </div>
    </>
  )
}
