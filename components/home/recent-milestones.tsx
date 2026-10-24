import { milestones } from '@/lib/content'
import { formatMonthYear } from '@/lib/format'
import { SectionHeading } from '@/components/section-heading'

export function RecentMilestones() {
  const recent = [...milestones].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

  return (
    <section aria-labelledby="recent-heading" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading
          id="recent-heading"
          eyebrow="Lately"
          title="Recent milestones"
          link={{ href: '/journey', label: 'The full journey' }}
        />
        <ol className="mt-12 grid gap-px bg-foreground/10 md:grid-cols-3">
          {recent.map((milestone) => (
            <li key={milestone.title} className="flex flex-col bg-secondary p-6 md:p-8">
              <time dateTime={milestone.date} className="text-xs uppercase tracking-[0.2em] text-brand">
                {formatMonthYear(milestone.date)}
              </time>
              <h3 className="mt-3 text-2xl leading-snug">{milestone.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/70">{milestone.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
