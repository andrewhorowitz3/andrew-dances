'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import type { GalleryItem } from '@/lib/content'
import { cn } from '@/lib/utils'

const filters = ['All', 'Lessons', 'Parties', 'Performances'] as const
type Filter = (typeof filters)[number]

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const visible = filter === 'All' ? items : items.filter((item) => item.category === filter)
  const active = activeIndex !== null ? visible[activeIndex] : null

  const open = (index: number) => {
    setActiveIndex(index)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const step = (direction: 1 | -1) =>
    setActiveIndex((index) =>
      index === null ? index : (index + direction + visible.length) % visible.length,
    )

  return (
    <>
      <div role="group" aria-label="Filter gallery" className="flex flex-wrap gap-2">
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
            className={cn(
              'h-10 border px-4 text-sm tracking-wide transition-colors',
              filter === name
                ? 'border-foreground bg-foreground text-background'
                : 'border-foreground/20 hover:border-foreground',
            )}
          >
            {name}
          </button>
        ))}
      </div>

      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item, index) => {
          const isVideo = item.type === 'video'
          const preview = isVideo ? (item.poster ?? item.src) : item.src
          return (
            <li key={item.src + item.caption} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => open(index)}
                className="group relative block w-full overflow-hidden bg-foreground text-left"
              >
                <Image
                  src={preview}
                  alt={item.alt}
                  width={1200}
                  height={index % 3 === 1 ? 1500 : 900}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={cn(
                    'w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-80',
                    index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[4/3]',
                  )}
                />
                {isVideo && (
                  <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
                    <span className="flex size-14 items-center justify-center rounded-full bg-background/90 text-foreground">
                      <Play className="ml-0.5 size-5 fill-current" />
                    </span>
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-background opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                  <span className="font-serif text-lg">{item.caption}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-background/70">
                    {isVideo ? 'Video' : item.category}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => event.target === event.currentTarget && close()}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') step(1)
          if (event.key === 'ArrowLeft') step(-1)
        }}
        aria-label={active?.caption ?? 'Photo viewer'}
        className="m-0 h-full max-h-none w-full max-w-none bg-black/95 p-0 text-background backdrop:bg-black/80"
      >
        {active && (
          <div className="flex h-full flex-col" onClick={(event) => event.target === event.currentTarget && close()}>
            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-background/60">
                {`${(activeIndex ?? 0) + 1} / ${visible.length}`}
              </p>
              <button type="button" onClick={close} className="p-2" autoFocus>
                <X className="size-6" aria-hidden />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="relative flex flex-1 items-center justify-center px-4 md:px-20">
              {active.type === 'video' ? (
                <video
                  key={active.src}
                  src={active.src}
                  poster={active.poster}
                  controls
                  className="max-h-[75vh] w-auto max-w-full"
                />
              ) : (
                <div className="relative h-[75vh] w-full">
                  <Image
                    key={active.src}
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="100vw"
                    className="object-contain grayscale"
                  />
                </div>
              )}
              <button
                type="button"
                onClick={() => step(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 transition-colors hover:text-brand md:left-6"
              >
                <ChevronLeft className="size-8" aria-hidden />
                <span className="sr-only">Previous</span>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 transition-colors hover:text-brand md:right-6"
              >
                <ChevronRight className="size-8" aria-hidden />
                <span className="sr-only">Next</span>
              </button>
            </div>
            <p className="px-5 py-6 text-center font-serif text-xl italic">{active.caption}</p>
          </div>
        )}
      </dialog>
    </>
  )
}
