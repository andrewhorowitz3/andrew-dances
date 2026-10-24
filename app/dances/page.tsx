import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { DanceGroupSection } from '@/components/dances/dance-group-section'
import { danceGroups } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Dances & Progress',
  description: 'Every dance I’m learning — Smooth, Rhythm, and social — with my current level and focus.',
}

export default function DancesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Dances & Progress"
        title="Bronze, and loving every minute."
        description="Here’s every dance I’m learning, where I am with it, and what my instructor and I are polishing right now. Progress is slow, steady, and endlessly satisfying."
      />
      <nav aria-label="Dance styles" className="sticky top-16 z-20 border-b border-foreground/10 bg-background/95 backdrop-blur">
        <ul className="mx-auto flex max-w-6xl gap-8 overflow-x-auto px-5 md:px-8">
          {danceGroups.map((group) => (
            <li key={group.id}>
              <a
                href={`#${group.id}`}
                className="block whitespace-nowrap py-4 text-sm tracking-wide text-foreground/70 transition-colors hover:text-brand"
              >
                {`${group.name} · ${group.dances.length}`}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {danceGroups.map((group, index) => (
        <DanceGroupSection key={group.id} group={group} index={index} />
      ))}
    </>
  )
}
