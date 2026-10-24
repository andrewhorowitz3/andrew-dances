import Image from 'next/image'
import { Check } from 'lucide-react'
import type { Goal } from '@/lib/content'
import { formatDate } from '@/lib/format'
import { cn } from '@/lib/utils'

export function GoalCard({ goal, index }: { goal: Goal; index: number }) {
  const done = goal.checklist.filter((c) => c.done).length
  const total = goal.checklist.length
  const percent = Math.round((done / total) * 100)
  const reversed = index % 2 === 1

  return (
    <article className="grid gap-8 py-14 md:grid-cols-12 md:gap-14 md:py-20">
      <div className={cn('relative aspect-[4/5] overflow-hidden md:col-span-5', reversed && 'md:order-2')}>
        <Image
          src={goal.image}
          alt=""
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover grayscale"
        />
      </div>
      <div className="flex flex-col justify-center md:col-span-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.2em]">
          <span className="text-brand">{goal.label}</span>
          <span className="text-foreground/60">
            {'Target: '}
            <time dateTime={goal.targetDate}>{formatDate(goal.targetDate)}</time>
          </span>
        </div>
        <h2 className="mt-3 text-4xl leading-tight tracking-tight md:text-5xl">{goal.title}</h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/70">{goal.description}</p>

        <div className="mt-8">
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-medium">Progress</span>
            <span className="text-foreground/60">{`${done} of ${total} steps`}</span>
          </div>
          <div
            className="mt-2 h-1 w-full bg-foreground/10"
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${goal.title} progress`}
          >
            <div className="h-full bg-brand" style={{ width: `${percent}%` }} />
          </div>
        </div>

        <ul className="mt-8 flex flex-col">
          {goal.checklist.map((step) => (
            <li
              key={step.item}
              className="flex items-center gap-4 border-b border-foreground/10 py-3 last:border-b-0"
            >
              <span
                className={cn(
                  'flex size-5 shrink-0 items-center justify-center border',
                  step.done ? 'border-foreground bg-foreground text-background' : 'border-foreground/30',
                )}
              >
                {step.done && <Check className="size-3.5" aria-hidden />}
              </span>
              <span className={cn(step.done && 'text-foreground/50 line-through decoration-foreground/30')}>
                {step.item}
              </span>
              <span className="sr-only">{step.done ? '(done)' : '(to do)'}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
