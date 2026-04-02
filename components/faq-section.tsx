import { GlassCard } from './glass-card'

const faqs = [
  {
    q: 'Értékesítenek jegyeket?',
    a: 'Nem. Mi kizárólag ár-összehasonlítást nyújtunk. Nem értékesítünk jegyeket, és nem közvetítünk jegyvásárlást sem. Az összes tranzakció kizárólag a partner platformján zajlik.',
    category: 'Alapvető',
    catColor: 'bg-sky-100 text-sky-700',
  },
  {
    q: 'Gyűjtik a fizetési adataimat?',
    a: 'Nem. Semmilyen személyes vagy fizetési adatot nem kezelünk és nem tárolunk. Ha jegyet szeretne vásárolni, a kiválasztott partner weboldalára irányítjuk Önt.',
    category: 'Adatvédelem',
    catColor: 'bg-red-100 text-red-700',
  },
  {
    q: 'Mennyire pontosak az árak?',
    a: 'Az árak tájékoztató jellegűek és rendszeresen frissítjük őket. Az árak azonban változhatnak — a vásárlás előtt mindig ellenőrizze a partner weboldalán az aktuális árat.',
    category: 'Árak',
    catColor: 'bg-amber-100 text-amber-700',
  },
  {
    q: 'Ingyenes a szolgáltatás?',
    a: 'Igen, az ár-összehasonlítás teljesen ingyenes a felhasználók számára. Nem kell regisztrálni, nem kell semmilyen adatot megadni. Ha rákattint egy partnerre és vásárol, mi jutalékot kaphatunk a partnertől.',
    category: 'Díjak',
    catColor: 'bg-green-100 text-green-700',
  },
  {
    q: 'Melyek az elérhető partnerplatformok?',
    a: 'Jelenleg a TicketMaster, Eventim, JegyMester, InterTicket, StubHub és más európai platformok árait jelenítjük meg és hasonlítjuk össze.',
    category: 'Partnerek',
    catColor: 'bg-violet-100 text-violet-700',
  },
  {
    q: 'Mi a különbség a névérték és a megjelenített ár között?',
    a: 'A névérték a szervező által meghatározott eredeti ár. A partner platformokon eltérő (akár magasabb vagy alacsonyabb) árak is megjelenhetnek a kínálat és kereslet alakulásától függően.',
    category: 'Árak',
    catColor: 'bg-amber-100 text-amber-700',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/65 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
            GYIK
          </span>
          <h2 className="mb-4 text-4xl font-black text-foreground sm:text-5xl">
            Gyakran Ismételt Kérdések
          </h2>
          <p className="text-lg text-muted-foreground">
            Minden, amit tudni érdemes a szolgáltatásunkról.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <GlassCard key={faq.q} className="p-6 transition-shadow hover:shadow-[0_8px_24px_oklch(0.6_0.04_220/0.12)]">
              <div className="flex items-start gap-4">
                <span className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${faq.catColor}`}>
                  {faq.category}
                </span>
                <div>
                  <h3 className="mb-2 text-base font-bold text-foreground">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
