import Image from 'next/image'
import Link from 'next/link'
import { LegalDisclaimerBar } from '@/components/legal-disclaimer-bar'

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden pt-32 sm:pt-36">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft light overlay for glassmorphism base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-sky-100/60 to-blue-50/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
      </div>

      {/* Disclaimer: min ~20% viewport height, grows with text — no scroll, sits below fixed header */}
      <div className="relative z-10 w-full min-w-0 shrink-0">
        <LegalDisclaimerBar variant="hero" />
      </div>

      {/* Main hero content — fills remaining space */}
      <div className="relative z-10 flex min-h-0 flex-1 items-center py-6 sm:py-8 lg:py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            {/* Left column: headline + CTA */}
            <div>
              <h1 className="mb-4 text-2xl font-black leading-[1.12] text-foreground text-balance sm:text-3xl lg:text-4xl">
                Sportjegy
                <br />
                <span className="text-primary">ár-összehasonlítás</span>
                <br />
                egy helyen
              </h1>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-foreground/65 sm:text-lg">
                Hasonlítsa össze a legjobb jegyértékesítők árait valós időben — futball, F1, tenisz, kézilabda és még sok más sportesemény.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                >
                  Összes esemény megtekintése
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/65 px-7 py-3.5 text-base font-semibold text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-white/85 hover:-translate-y-0.5"
                >
                  Hogyan működik?
                </Link>
              </div>
            </div>

            {/* Right column: floating stats card */}
            <div className="hidden lg:flex lg:justify-end">
              <div className="w-full max-w-sm space-y-3">
                {[
                  { label: 'Futball', events: '120+ esemény', color: 'border-green-200/60 bg-green-50/60' },
                  { label: 'Formula 1', events: '24 verseny', color: 'border-red-200/60 bg-red-50/60' },
                  { label: 'Tenisz', events: '80+ torna', color: 'border-yellow-200/60 bg-yellow-50/60' },
                  { label: 'Kosárlabda', events: '60+ meccs', color: 'border-orange-200/60 bg-orange-50/60' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 rounded-2xl border ${item.color} p-4 backdrop-blur-xl shadow-[0_2px_16px_oklch(0.6_0.03_220/0.1)]`}
                  >
                    <div>
                      <p className="font-bold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.events}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
