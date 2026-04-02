import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GlassCard } from '@/components/glass-card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rólunk | Hungary Stadium Tickets',
  description: 'Ismerje meg a Hungary Stadium Tickets ár-összehasonlító platformot — kik vagyunk, mit csinálunk és miért.',
}

const values = [
  {
    title: 'Teljes átláthatóság',
    desc: 'Minden ár nyilvánosan megjelenik egymás mellett. Nincs rejtett díj, nincs megtévesztő árazás — csak tiszta összehasonlítás.',
    color: 'border-sky-200/60 bg-sky-50/50',
    tag: 'bg-sky-100 text-sky-700',
    tagLabel: 'Alapelv',
  },
  {
    title: 'Adatvédelem',
    desc: 'Nem gyűjtünk személyes adatokat és fizetési információkat. Az összes tranzakció közvetlenül a partner platformján zajlik.',
    color: 'border-red-200/60 bg-red-50/50',
    tag: 'bg-red-100 text-red-700',
    tagLabel: 'Garancia',
  },
  {
    title: 'Ingyenes szolgáltatás',
    desc: 'Az ár-összehasonlítás teljesen ingyenes minden felhasználó számára. Bevételünk partner-jutalékból származik.',
    color: 'border-green-200/60 bg-green-50/50',
    tag: 'bg-green-100 text-green-700',
    tagLabel: 'Ingyenes',
  },
  {
    title: 'Magyar és európai fedettség',
    desc: 'Magyar bajnokságoktól kezdve a Champions League-en át a Formula 1-ig — az összes nagy sportesemény egy helyen.',
    color: 'border-violet-200/60 bg-violet-50/50',
    tag: 'bg-violet-100 text-violet-700',
    tagLabel: 'Lefedettség',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Disclaimer strip */}
        <div className="border-b border-red-200/70 bg-red-50/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm font-black uppercase tracking-widest text-red-700">Fontos tájékoztatás</p>
              <p className="text-base font-semibold text-red-700 sm:text-lg">
                Nem értékesítünk jegyeket. Kizárólag ár-összehasonlítást nyújtunk.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="mb-12">
            <span className="mb-3 inline-flex items-center rounded-full border border-primary/25 bg-white/65 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
              Rólunk
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight text-foreground text-balance sm:text-5xl">
              Kik vagyunk?
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Egy független ár-összehasonlító platform, amely segít megtalálni a legjobb sportjegy-ajánlatokat.
            </p>
          </div>

          <div className="space-y-6">
            {/* Identity */}
            <GlassCard className="p-8">
              <h2 className="mb-5 text-2xl font-black text-foreground">Hungary Stadium Tickets</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  A <strong className="text-foreground">Hungary Stadium Tickets</strong> egy független ár-összehasonlító platform, amelynek célja, hogy a sportrajongók a legjobb áron jussanak hozzá kedvenc rendezvényük jegyeihez.
                </p>
                <p>
                  Nem vagyunk jegyügynök és <strong className="text-foreground">nem értékesítünk jegyeket</strong>. Szolgáltatásunk kizárólag arra irányul, hogy a különböző jegyplatformokon megjelenő árakat egyetlen helyen, átlátható formában jelenítsük meg.
                </p>
                <p>
                  Szolgáltatásunkat a <strong className="text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong> (Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus) üzemelteti.
                </p>
              </div>
            </GlassCard>

            {/* What we do */}
            <GlassCard className="p-8 border-sky-200/60 bg-sky-50/40">
              <h2 className="mb-5 text-2xl font-black text-foreground">Mit csinálunk?</h2>
              <ul className="space-y-3">
                {[
                  'Több jegyértékesítő platform aktuális árait gyűjtjük össze',
                  'Az árakat egyetlen nézetben, összehasonlíthatóan jelenítjük meg',
                  'Kattintás esetén a kiválasztott partnerre irányítjuk a felhasználót',
                  'Nem avatkozunk be a vásárlási folyamatba semmilyen formában',
                  'Nem kezelünk fizetési adatokat és személyes információkat',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Values grid */}
            <div>
              <h2 className="mb-5 text-2xl font-black text-foreground">Értékeink</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((v) => (
                  <GlassCard key={v.title} className={`p-6 ${v.color}`}>
                    <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${v.tag}`}>
                      {v.tagLabel}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Legal disclaimer */}
            <GlassCard className="p-8 border-red-200/60 bg-red-50/60">
              <h2 className="mb-4 text-xl font-black text-red-700">Jogi nyilatkozat</h2>
              <div className="space-y-3 text-sm leading-relaxed text-red-700/80">
                <p>
                  A weboldalon megjelenő árak tájékoztató jellegűek és eltérhetnek a névértéktől vagy a tényleges eladási ártól. Az árak változhatnak — a vásárlás előtt mindig ellenőrizze a partner weboldalán a pontos, aktuális árat.
                </p>
                <p>
                  A Hungary Stadium Tickets semmilyen felelősséget nem vállal az esetlegesen hibás, elavult vagy pontatlan árinformációkért. Nem értékesítünk jegyeket és nem közvetítünk jegyvásárlást. A jegyek megvásárlásakor a partner platform feltételei az irányadók.
                </p>
              </div>
            </GlassCard>

            {/* Contact */}
            <GlassCard className="p-8">
              <h2 className="mb-5 text-xl font-black text-foreground">Kapcsolat</h2>
              <address className="not-italic text-sm leading-loose text-muted-foreground">
                <strong className="block text-base font-bold text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong>
                Myrianthous Anna<br />
                Panagioti Kaspi 5Α<br />
                Nicosia 1095, Cyprus<br />
                <a href="mailto:info@hungarystadiumtickets.com" className="mt-3 inline-block font-semibold text-primary hover:underline">
                  info@hungarystadiumtickets.com
                </a>
              </address>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
