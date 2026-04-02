'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Ticket } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/events', label: 'Események' },
  { href: '/partners', label: 'Partnerek' },
  { href: '/about', label: 'Rólunk' },
  { href: '/faq', label: 'GYIK' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Floating pill nav */}
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div className="flex items-stretch gap-3">

          {/* Logo block */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-2xl border border-white/70 bg-white/65 px-4 py-0 shadow-[0_2px_16px_oklch(0.6_0.04_220/0.1)] backdrop-blur-2xl transition-all hover:bg-white/80"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
              <Ticket className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Hungary</span>
              <span className="block text-sm font-black tracking-tight text-foreground">STADIUM<span className="text-primary">TICKETS</span></span>
            </div>
          </Link>

          {/* Desktop nav links — center block */}
          <nav className="hidden flex-1 items-center rounded-2xl border border-white/70 bg-white/65 px-2 shadow-[0_2px_16px_oklch(0.6_0.04_220/0.1)] backdrop-blur-2xl md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                    active
                      ? 'bg-white/80 text-foreground shadow-sm'
                      : 'text-foreground/55 hover:bg-white/50 hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA block */}
          <Link
            href="/events"
            className="hidden shrink-0 items-center gap-2 rounded-2xl bg-primary px-5 text-sm font-bold text-white shadow-[0_2px_16px_oklch(0.58_0.22_28/0.25)] transition-all hover:bg-primary/90 hover:shadow-[0_4px_24px_oklch(0.58_0.22_28/0.35)] md:flex"
          >
            Jegyeket keresek
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/65 shadow-[0_2px_16px_oklch(0.6_0.04_220/0.1)] backdrop-blur-2xl transition-all hover:bg-white/80 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
          >
            {open ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-[0_8px_32px_oklch(0.6_0.04_220/0.14)] backdrop-blur-2xl md:hidden">
            <nav className="flex flex-col p-3 gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      active ? 'bg-primary/10 text-primary' : 'text-foreground/65 hover:bg-white/70 hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/events"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-white shadow-sm"
              >
                Jegyeket keresek
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
