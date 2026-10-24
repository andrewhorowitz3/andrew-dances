import Image from 'next/image'
import Link from 'next/link'
import { profile } from '@/lib/content'
import { formatMonthYear } from '@/lib/format'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-foreground text-background">
      <Image
        src="/images/hero.png"
        alt="A ballroom couple waltzing across an elegant, sunlit ballroom"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[60%_center] grayscale"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-background/80">
          {`Dancing since ${formatMonthYear(profile.startedDancing)}`}
        </p>
        <h1 className="mt-4 text-7xl leading-none tracking-tight md:text-9xl">
          {profile.name}
          <span className="text-brand">.</span>
        </h1>
        <p className="mt-6 max-w-xl font-serif text-2xl italic leading-snug text-background/90 md:text-3xl">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/journey"
            className="inline-flex h-12 items-center bg-background px-6 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            Follow my journey
          </Link>
          <Link
            href="/gallery"
            className="inline-flex h-12 items-center border border-background/60 px-6 text-sm font-medium tracking-wide transition-colors hover:border-background hover:bg-background/10"
          >
            See the gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
