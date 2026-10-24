'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/nav'
import { profile } from '@/lib/content'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          {profile.name}
          <span className="text-brand">.</span>
          <span className="sr-only"> — home</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'relative py-1 text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground',
                    isActive(item.href) &&
                      'text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-brand',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-foreground/10 bg-background lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center justify-between border-b border-foreground/5 py-3 font-serif text-2xl',
                    isActive(item.href) ? 'text-foreground' : 'text-foreground/60',
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
