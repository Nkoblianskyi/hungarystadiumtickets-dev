import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GlassCard } from '@/components/glass-card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gyakran Ismételt Kérdések | Hungary Stadium Tickets',
  description: 'Válaszok a leggyakoribb kérdésekre a Hungary Stadium Tickets ár-összehasonlító platformmal kapcsolatban.',
}

const faqSections = [
  {
    category: 'Alapkérdések',
    color: 'bg-sky-100 text-sky-700',
    items: [
      {
        q: 'Mi a Hungary Stadium Tickets?',
        a: 'Egy független ár-összehasonlító platform. Összegyűjtjük a különböző jegyplatformokon megjelenő sportjegy-árakat és egyetlen helyen jelenítjük meg őket, hogy Ön megtalálja a legjobb ajánlatot.',
      },
      {
        q: 'Értékesítenek jegyeket?',
        a: 'Nem. Kizárólag ár-összehasonlítást nyújtunk. Nem értékesítünk jegyeket, nem közvetítünk jegyvásárlást és nem avatkozunk be a tranzakciós folyamatba. Minden vásárlás a partner platform weboldalán zajlik.',
      },
      {
        q: 'Ingyenes a szolgáltatás?',
        a: 'Igen, az ár-összehasonlítás teljesen ingyenes. Nem kell regisztrálni, nem kell adatokat megadni. Bevételünk abból a jutalékból származik, amelyet partnereink fizetnek, ha Ön az ő weboldalukon vásárol.',
      },
    ],
  },
  {
    category: 'Árak és adatok',
    color: 'bg-amber-100 text-amber-700',
    items: [
      {
        q: 'Mennyire megbízhatóak a megjelenített árak?',
        a: 'Az árak tájékoztató jellegűek és rendszeresen frissítjük őket. Azonban változhatnak a kereslet és kínálat függvényében. A vásárlás előtt mindig ellenőrizze az aktuális árat a partner weboldalán.',
      },
      {
        q: 'Mi a különbség a névérték és a megjelenített ár között?',
        a: 'A névérték a szervező által eredetileg meghatározott jegyár. A különböző platformokon ennél alacsonyabb vagy magasabb árak is megjelenhetnek az adott platform árazási politikájától függően.',
      },
      {
        q: 'Miért különböznek egymástól a partnerek árai?',
        a: 'Minden partner platform saját árazási politikát alkalmaz. Az eltérések oka lehet a szolgáltatási díj, a viszonteladói piaci ár, az elérhető jegykategória, vagy az aktuális kínálat-kereslet arány.',
      },
    ],
  },
  {
    category: 'Adatvédelem és biztonság',
    color: 'bg-red-100 text-red-700',
    items: [
      {
        q: 'Gyűjtik a személyes adataimat?',
        a: 'Nem. Nem gyűjtünk és nem tárolunk személyes adatokat az összehasonlítás során. Nem szükséges regisztráció, és nem kérjük az Ön nevét, e-mail-címét vagy fizetési adatait.',
      },
      {
        q: 'Biztonságos a vásárlás a partnerek weboldalán?',
        a: 'A partner platformok saját biztonsági szabályzataik szerint működnek — mi ezekért nem vállalunk felelősséget. Kizárólag ismert és megbízható partnereket jelenítünk meg. Mindig olvassa el a partner adatvédelmi tájékoztatóját.',
      },
      {
        q: 'Használnak cookie-kat?',
        a: 'Igen, a weboldal működéséhez és a teljesítményméréshez szükséges sütiket használunk. Részletekért olvassa el a Cookie Szabályzatunkat.',
      },
    ],
  },
  {
    category: 'Partner platformok',
    color: 'bg-violet-100 text-violet-700',
    items: [
      {
        q: 'Mely platformok árait jelenítik meg?',
        a: 'Jelenleg a TicketMaster, Eventim, JegyMester, Jegy, StubHub, az F1 Official és más európai platformok árait hasonlítjuk össze. A lista folyamatosan bővül.',
      },
      {
        q: 'Hogyan vásárolhatok jegyet?',
        a: 'Az esemény oldalán kattintson a kívánt partner "Megnézem" gombjára. Ez a partner weboldalára irányítja, ahol elvégezheti a vásárlást. A tranzakció teljes egészében a partner platformján zajlik.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-44">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-12">
            <span className="mb-3 inline-flex items-center rounded-full border border-primary/25 bg-white/65 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
              GYIK
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight text-foreground text-balance sm:text-5xl">
              Gyakran Ismételt Kérdések
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Minden fontos kérdésre választ adunk a platformunkkal kapcsolatban.
            </p>
          </div>

          <div className="space-y-12">
            {faqSections.map((section) => (
              <div key={section.category}>
                <div className="mb-5 flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${section.color}`}>
                    {section.category}
                  </span>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
                <div className="space-y-3">
                  {section.items.map((faq) => (
                    <GlassCard key={faq.q} className="p-6 transition-shadow hover:shadow-[0_8px_24px_oklch(0.6_0.04_220/0.12)]">
                      <h3 className="mb-2 text-base font-bold text-foreground">{faq.q}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <GlassCard className="mt-12 p-8 text-center border-primary/20 bg-gradient-to-br from-orange-50/60 to-amber-50/40">
            <p className="text-lg font-bold text-foreground">Nem találta meg a választ?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Írjon nekünk:{' '}
              <a href="mailto:info@hungarystadiumtickets.com" className="font-semibold text-primary hover:underline">
                info@hungarystadiumtickets.com
              </a>
            </p>
          </GlassCard>
        </div>
      </main>
      <Footer />
    </>
  )
}
