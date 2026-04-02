import { EventCard } from './event-card'
import { events } from '@/lib/events'
import Link from 'next/link'

export function EventsPreviewSection() {
  const featured = events.slice(0, 6)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading row + disclaimer (stacked on mobile; side‑by‑side from lg) */}
        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,28rem)] lg:items-start lg:gap-10">
          <div className="min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/65 px-4 py-1.5 text-sm font-semibold text-accent shadow-sm backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-accent"></span>
                  Közelgő rendezvények
                </span>
                <h2 className="text-4xl font-black leading-tight text-foreground text-balance sm:text-5xl">
                  Kiemelt sportesemények
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Nézze meg a legjobb ajánlatokat — az árak naponta frissülnek.
                </p>
              </div>
              <Link
                href="/events"
                className="hidden shrink-0 items-center gap-2 rounded-xl border border-white/75 bg-white/65 px-6 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-white/85 hover:-translate-y-0.5 sm:inline-flex"
              >
                Összes esemény
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Disclaimer — larger type than section subtitle; not sale, comparison only */}
          <aside className="min-w-0">
            <div className="rounded-2xl border border-red-200/90 bg-red-50/95 px-4 py-4 shadow-sm sm:px-5 sm:py-4">
              <p className="text-lg font-black leading-tight text-red-900 sm:text-xl">
                Nem jegyértékesítés — csak ár-összehasonlítás
              </p>
              <p className="mt-2 text-base font-bold leading-snug text-red-800 sm:text-lg">
                Nem adunk el jegyeket; kizárólag árakat hasonlítunk össze. Másodlagos piac — az árak meghaladhatják a
                névértéket.
              </p>
            </div>
          </aside>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-xl border border-white/75 bg-white/65 px-6 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm"
          >
            Összes esemény megtekintése
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
