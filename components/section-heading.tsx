import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  id?: string
  link?: { href: string; label: string }
}

export function SectionHeading({ eyebrow, title, id, link }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/50">
            {eyebrow}
          </p>
        )}
        <h2 id={id} className="mt-2 text-3xl tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {link && (
        <Link
          href={link.href}
          className="group inline-flex items-center gap-2 text-sm font-medium underline decoration-brand decoration-1 underline-offset-8 transition-colors hover:text-brand"
        >
          {link.label}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      )}
    </div>
  )
}
