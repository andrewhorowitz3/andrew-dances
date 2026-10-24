import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { GoalCard } from '@/components/goals/goal-card'
import { goals } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Goals',
  description: 'What I’m working toward next: a level check-out, a showcase routine, and a competition.',
}

export default function GoalsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Goals"
        title="What I’m dancing toward."
        description="Three things on the horizon. None of them are about being the best in the room — just about being a little better than I was last month."
      />
      <div className="mx-auto max-w-6xl divide-y divide-foreground/10 px-5 md:px-8">
        {goals.map((goal, index) => (
          <GoalCard key={goal.title} goal={goal} index={index} />
        ))}
      </div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8">
          <p className="font-serif text-3xl italic leading-snug md:text-4xl">
            {'“It’s never too late to start dancing. The best time was years ago; the second best time is your next lesson.”'}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
            Something I tell myself often
          </p>
        </div>
      </section>
    </>
  )
}
