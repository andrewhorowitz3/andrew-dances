import { demoNotice } from '@/lib/content'

export function DemoBanner() {
  if (!demoNotice.enabled) return null

  return (
    <aside
      aria-label="Demo disclaimer"
      className="border-b border-brand/30 bg-brand px-5 py-2 text-center text-xs font-medium leading-relaxed tracking-wide text-brand-foreground md:px-8"
    >
      {demoNotice.message}
    </aside>
  )
}
