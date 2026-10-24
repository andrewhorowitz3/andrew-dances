import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const sections = [
  {
    href: '/dances',
    title: 'Dances & Progress',
    description: 'Twelve dances, one level at a time.',
    image: '/images/rumba.png',
    alt: 'A couple in a rumba pose in a mirrored studio',
  },
  {
    href: '/events',
    title: 'Events & Performances',
    description: 'Parties, showcases, and competitions.',
    image: '/images/showcase.png',
    alt: 'A couple performing under a spotlight',
  },
  {
    href: '/goals',
    title: 'What’s next',
    description: 'A check-out, a routine, and a competition.',
    image: '/images/competition.png',
    alt: 'Couples dancing on a competition floor',
  },
]

export function Explore() {
  return (
    <section aria-labelledby="explore-heading" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading id="explore-heading" eyebrow="Explore" title="Take a look around" />
      <ul className="mt-12 grid gap-8 md:grid-cols-3">
        {sections.map((section) => (
          <li key={section.href}>
            <Link href={section.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-foreground">
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl transition-colors group-hover:text-brand">{section.title}</h3>
                  <p className="mt-1 text-foreground/60">{section.description}</p>
                </div>
                <ArrowUpRight
                  className="mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  aria-hidden
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
