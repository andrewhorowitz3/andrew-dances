import Image from 'next/image'
import { danceGroups, events, milestones, profile } from '@/lib/content'
import { isUpcoming, yearsSince } from '@/lib/format'

export function Intro() {
  const danceCount = danceGroups.reduce((total, group) => total + group.dances.length, 0)
  const performanceCount = events.filter(
    (event) => event.kind !== 'Dance Party' && !isUpcoming(event.date),
  ).length
  const checkoutCount = milestones.filter((m) => m.kind === 'checkout').length

  const stats = [
    { value: yearsSince(profile.startedDancing), label: 'Years dancing' },
    { value: danceCount, label: 'Dances learning' },
    { value: performanceCount, label: 'Performances' },
    { value: checkoutCount, label: 'Check-outs passed' },
  ]

  return (
    <section aria-labelledby="intro-heading" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden md:col-span-5">
          <Image
            src="/images/shoes.png"
            alt="A well-worn pair of black ballroom shoes resting on a wooden floor"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover grayscale"
          />
        </div>
        <div className="flex flex-col justify-center md:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand">Welcome</p>
          <h2 id="intro-heading" className="mt-4 text-4xl leading-tight tracking-tight md:text-5xl">
            {'Hello, and thanks for stopping by.'}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70 text-pretty">{profile.intro}</p>

          <dl className="mt-12 grid grid-cols-2 border-t border-foreground/10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-foreground/10 py-6 pr-4 sm:border-b-0">
                <dt className="text-xs uppercase tracking-[0.15em] text-foreground/50">{stat.label}</dt>
                <dd className="mt-2 font-serif text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
