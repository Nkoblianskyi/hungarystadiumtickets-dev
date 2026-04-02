import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EventCard } from '@/components/event-card'
import { events } from '@/lib/events'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Összes Sportesemény | Hungary Stadium Tickets',
  description: 'Hasonlítsa össze a jegyárakat az összes nagy sportesemény esetén Magyarországon és Európában.',
}

const sports = ['Összes', ...Array.from(new Set(events.map((e) => e.sport)))]

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-44">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-10">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/65 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {events.length} esemény összehasonlítva
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight text-foreground text-balance sm:text-5xl">
              Összes Sportesemény
            </h1>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Közelgő rendezvények — összehasonlított árak a legjobb platformokról, naponta frissítve.
            </p>
          </div>

          {/* Sport filter pills (static/visual) */}
          <div className="mb-8 flex flex-wrap gap-2">
            {sports.map((sport, i) => (
              <span
                key={sport}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                  i === 0
                    ? 'bg-primary text-white shadow-sm shadow-primary/20'
                    : 'border border-white/70 bg-white/60 text-foreground/70 backdrop-blur-sm'
                }`}
              >
                {sport}
              </span>
            ))}
          </div>

          {/* Events grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
