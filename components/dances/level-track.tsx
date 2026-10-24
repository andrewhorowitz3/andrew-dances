import { levels, type Level } from '@/lib/content'
import { cn } from '@/lib/utils'

export function LevelTrack({ level }: { level: Level }) {
  const currentIndex = levels.indexOf(level)

  return (
    <div>
      <p className="sr-only">{`Current level: ${level}`}</p>
      <ol className="grid grid-cols-4 gap-1" aria-hidden>
        {levels.map((name, index) => (
          <li key={name} className="flex flex-col gap-2">
            <span
              className={cn(
                'h-1',
                index < currentIndex && 'bg-foreground',
                index === currentIndex && 'bg-brand',
                index > currentIndex && 'bg-foreground/10',
              )}
            />
            <span
              className={cn(
                'text-[10px] uppercase tracking-[0.15em]',
                index === currentIndex ? 'font-semibold text-brand' : 'text-foreground/40',
              )}
            >
              {name}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
