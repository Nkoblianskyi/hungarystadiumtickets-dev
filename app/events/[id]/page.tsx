import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GlassCard } from '@/components/glass-card'
import { events } from '@/lib/events'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) return { title: 'Esemény nem található' }
  return {
    title: `${event.title} - Ár-összehasonlítás | Hungary Stadium Tickets`,
    description: `Hasonlítsa össze a jegyárakat: ${event.title}, ${event.date}, ${event.venue}`,
  }
}

export async function generateStaticParams() {
  return events.map((e) => ({ id: e.id }))
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) notFound()

  const lowestPrice = Math.min(...event.partners.map((p) => p.price))

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Google Ads required disclaimer — top 20%, solid bar, permanently visible */}
        <div className="bg-red-700 text-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <p className="text-center text-base font-bold leading-snug sm:text-lg">
              Ez a weboldal egy{' '}
              <strong className="underline underline-offset-2">vторинний piac (secondary market)</strong>{' '}
              — perепrodált jegyeket hasonlítunk össze.{' '}
              <strong className="underline underline-offset-2">Az árak meghaladhatják a névértéket.</strong>{' '}
              Jegyeket NEM értékesítünk és fizetési adatokat NEM kezelünk.
            </p>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative h-72 overflow-hidden sm:h-96">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-wrap items-end gap-3">
                <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white shadow">
                  {event.sport}
                </span>
                <span className="rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-sm font-semibold text-foreground shadow backdrop-blur-sm">
                  {event.country}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/events" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Vissza az eseményekhez
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left: main content */}
            <div className="space-y-6 lg:col-span-2">
              {/* Title & details */}
              <div>
                <h1 className="mb-4 text-3xl font-black leading-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
                  {event.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.venue}, {event.city}
                  </span>
                </div>
              </div>

              {/* Event details card */}
              <GlassCard className="p-6">
                <h2 className="mb-5 text-xl font-black text-foreground">Esemény részletei</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { label: 'Dátum', value: event.date },
                    { label: 'Helyszín', value: event.venue },
                    { label: 'Város', value: `${event.city}, ${event.country}` },
                    { label: 'Sportág', value: event.sport },
                  ].map((detail) => (
                    <div key={detail.label} className="rounded-xl border border-white/60 bg-white/40 p-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="font-bold text-foreground">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Price comparison */}
              <div>
                <h2 className="mb-4 text-xl font-black text-foreground">Ár-összehasonlítás</h2>

                {/* Disclaimer — inline price comparison, Google-compliant */}
                <div className="mb-5 rounded-xl bg-red-700 px-5 py-4 text-white">
                  <p className="text-base font-bold leading-relaxed">
                    <strong className="block font-black text-lg">VТОРИННИЙ PÁC — NEM ÉRTÉKESÍTÜNK JEGYEKET</strong>
                    Az alábbi árak perепrodált jegyekre vonatkoznak és meghaladhatják a névértéket. Az árak tájékoztató jellegűek — vásárlás a partner weboldalán zajlik. Fizetési adatokat NEM kezelünk.
                  </p>
                </div>

                <div className="space-y-3">
                  {event.partners.map((partner, idx) => {
                    const isCheapest = partner.price === lowestPrice
                    return (
                      <GlassCard
                        key={partner.name}
                        className={`flex flex-col gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_oklch(0.6_0.04_220/0.15)] sm:flex-row sm:items-center sm:justify-between ${
                          isCheapest ? 'border-green-200/70 bg-green-50/50' : ''
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white ${isCheapest ? 'bg-green-500' : 'bg-primary'}`}>
                            {idx + 1}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-foreground">{partner.name}</p>
                              {isCheapest && (
                                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                                  Legjobb ár
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">Partner platform</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className={`text-2xl font-black ${isCheapest ? 'text-green-600' : 'text-primary'}`}>
                            {partner.price.toLocaleString('hu-HU')} Ft
                          </p>
                          <a
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                          >
                            Megnézem →
                          </a>
                        </div>
                      </GlassCard>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-5">
              {/* Price summary */}
              <GlassCard className="p-6">
                <h3 className="mb-5 text-lg font-black text-foreground">Ár-összesítő</h3>
                <div className="space-y-3">
                  <div className="rounded-xl border border-primary/15 bg-gradient-to-br from-orange-50/70 to-amber-50/50 p-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Legalacsonyabb</p>
                    <p className="mt-1 text-3xl font-black text-primary">
                      {event.priceFrom.toLocaleString('hu-HU')} Ft
                    </p>
                  </div>
                  <div className="rounded-xl border border-accent/15 bg-gradient-to-br from-amber-50/70 to-orange-50/50 p-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Legmagasabb</p>
                    <p className="mt-1 text-3xl font-black text-accent">
                      {event.priceTo.toLocaleString('hu-HU')} Ft
                    </p>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    {event.partners.length} partnerplatform összehasonlítva
                  </p>
                </div>
              </GlassCard>

              {/* Warning sidebar card — solid, Google-compliant */}
              <div className="rounded-xl bg-red-700 p-6 text-white">
                <p className="mb-2 text-base font-black">VТОРИННИЙ PÁC</p>
                <ul className="space-y-2 text-base font-bold">
                  {[
                    'Perепродált jegyek ár-összehasonlítása',
                    'Az árak meghaladhatják a névértéket',
                    'Jegyeket NEM értékesítünk',
                    'Fizetési adatokat NEM kezelünk',
                    'Vásárlás a partner weboldalán zajlik',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 font-black">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back link */}
              <Link
                href="/events"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/60 px-5 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-white/80"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Vissza az eseményekhez
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
