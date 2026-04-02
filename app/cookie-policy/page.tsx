import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GlassCard } from '@/components/glass-card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Szabályzat | Hungary Stadium Tickets',
  description: 'A Hungary Stadium Tickets cookie-szabályzata — hogyan és miért használunk sütiket.',
}

const sections = [
  {
    title: 'Mi az a cookie (süti)?',
    color: 'border-sky-200/60 bg-sky-50/40',
    content: 'A cookie egy kis szövegfájl, amelyet a weboldal az Ön böngészőjében tárol, amikor meglátogatja az oldalt. A sütik segítenek a weboldal megfelelő működésében, a felhasználói élmény javításában és statisztikai adatok gyűjtésében.',
  },
  {
    title: 'Milyen sütiket használunk?',
    color: 'border-amber-200/60 bg-amber-50/40',
    content: null,
    list: [
      { name: 'Működési sütik', desc: 'Az oldal alapvető funkcióihoz szükségesek. Ezek nélkül a weboldal nem működne megfelelően. Ezek a sütik nem tárolnak személyazonosításra alkalmas adatokat.' },
      { name: 'Analitikai sütik', desc: 'Segítenek megérteni, hogyan használják a látogatók az oldalt (pl. Google Analytics). Az adatok anonim formában kerülnek összegyűjtésre.' },
      { name: 'Partner-követési sütik', desc: 'Ha egy partnerre kattint, az adott partner saját cookie-kat helyezhet el. Ezekre a partnereink saját szabályzata az irányadó.' },
    ],
  },
  {
    title: 'Hogyan kezelje a sütiket?',
    color: 'border-green-200/60 bg-green-50/40',
    content: 'A legtöbb böngésző lehetővé teszi a sütik kezelését a beállításokban. Törölheti a meglévő sütiket, letilthatja az automatikus tárolást, vagy értesítést kérhet, ha egy oldal sütit kíván elhelyezni. Felhívjuk figyelmét, hogy egyes funkciók korlátozottan működhetnek, ha letiltja a sütiket.',
  },
  {
    title: 'Harmadik felek sütijei',
    color: 'border-violet-200/60 bg-violet-50/40',
    content: 'Oldalunkon harmadik feles szolgáltatások (pl. Google Analytics) is használhatnak sütiket. Ezekre az adott szolgáltató adatvédelmi és cookie-szabályzata vonatkozik, amelyért mi nem vállalunk felelősséget.',
  },
  {
    title: 'Kapcsolat',
    color: 'border-primary/20 bg-orange-50/40',
    content: null,
    contact: true,
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Disclaimer strip */}
        <div className="border-b border-red-200/70 bg-red-50/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <p className="text-center text-base font-semibold text-red-700">
              Nem értékesítünk jegyeket. Kizárólag ár-összehasonlítást nyújtunk.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="mb-3 inline-flex items-center rounded-full border border-primary/25 bg-white/65 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
              Jogi
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight text-foreground sm:text-5xl">
              Cookie Szabályzat
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Utoljára frissítve: 2026.
            </p>
          </div>

          <div className="space-y-5">
            {sections.map((section) => (
              <GlassCard key={section.title} className={`p-7 ${section.color}`}>
                <h2 className="mb-4 text-xl font-black text-foreground">{section.title}</h2>
                {section.content && (
                  <p className="text-base leading-relaxed text-muted-foreground">{section.content}</p>
                )}
                {section.list && (
                  <div className="space-y-4">
                    {section.list.map((item) => (
                      <div key={item.name} className="rounded-xl border border-white/60 bg-white/40 p-4">
                        <p className="mb-1.5 font-bold text-foreground">{item.name}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.contact && (
                  <address className="not-italic text-base text-muted-foreground">
                    <strong className="text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong><br />
                    Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus<br />
                    <a href="mailto:info@hungarystadiumtickets.com" className="mt-2 inline-block font-semibold text-primary hover:underline">
                      info@hungarystadiumtickets.com
                    </a>
                  </address>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
