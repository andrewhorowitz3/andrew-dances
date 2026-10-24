import Link from 'next/link'
import { navItems } from '@/lib/nav'
import { demoNotice, profile } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-sm">
          <p className="font-serif text-3xl">
            {profile.name}
            <span className="text-brand">.</span>
          </p>
          <p className="mt-3 font-serif text-lg italic text-background/70">
            {'"Still learning, always dancing."'}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-background/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-background">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs tracking-wide text-background/50 md:px-8">
          {demoNotice.enabled && <p>{demoNotice.message}</p>}
          <p>{`© ${new Date().getFullYear()} ${profile.name}. Made with love for the dance floor.`}</p>
        </div>
      </div>
    </footer>
  )
}
