import { EventCard } from './event-card'
import { events } from '@/lib/events'
import Link from 'next/link'

export function EventsPreviewSection() {
  const featured = events.slice(0, 6)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading row */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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

        {/* Warning banner — permanently visible, solid, Google-compliant */}
        <div className="mb-10 rounded-xl bg-red-700 px-6 py-5 text-white">
          <p className="text-base font-bold leading-relaxed sm:text-lg">
            <strong className="block text-lg font-black sm:text-xl">FIGYELMEZTETÉS — VТОРИННИЙ PÁC / SECONDARY MARKET</strong>
            Ez az oldal egy <strong>vторинний piac</strong> — partnereinken keresztül{' '}
            <strong>perепродált jegyeket</strong> hasonlítunk össze.{' '}
            <strong>Az árak meghaladhatják a névértéket.</strong>{' '}
            Jegyeket NEM értékesítünk, fizetési adatokat NEM kezelünk. Az árak tájékoztató jellegűek — vásárlás előtt ellenőrizze a partner weboldalán.
          </p>
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
