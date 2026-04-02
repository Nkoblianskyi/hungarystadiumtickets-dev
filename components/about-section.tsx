import { GlassCard } from './glass-card'

const stats = [
  { value: '50+', label: 'Partner platform', color: 'text-sky-600', bg: 'bg-sky-50/60 border-sky-200/50' },
  { value: '500+', label: 'Aktív esemény', color: 'text-primary', bg: 'bg-orange-50/60 border-orange-200/50' },
  { value: '10M+', label: 'Összehasonlított ár', color: 'text-emerald-600', bg: 'bg-emerald-50/60 border-emerald-200/50' },
  { value: '100%', label: 'Ingyenes szolgáltatás', color: 'text-violet-600', bg: 'bg-violet-50/60 border-violet-200/50' },
]

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          {/* Left: Text */}
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/65 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
              Rólunk
            </span>
            <h2 className="mb-6 text-4xl font-black leading-tight text-foreground text-balance sm:text-5xl">
              Ár-összehasonlítás,<br className="hidden sm:block" /> nem jegyértékesítés
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A <strong className="font-bold text-foreground">Hungary Stadium Tickets</strong> egy független ár-összehasonlító platform, amely segít megtalálni a legjobb áron elérhető sportjegyeket Magyarországon és egész Európában.
              </p>
              <p>
                Mi <strong className="text-foreground">nem adunk el jegyeket</strong>, nem kezeljük az Ön személyes vagy fizetési adatait. Célunk az átláthatóság megteremtése a jegyárak terén.
              </p>
              <p>
                Szolgáltatásunkat a <strong className="text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong> (Nicosia, Ciprus) működteti, a legmagasabb adatvédelmi és etikai standardoknak megfelelően.
              </p>
            </div>

            {/* Disclaimer block */}
            <div className="mt-8 rounded-2xl border border-red-200/60 bg-red-50/60 p-5">
              <p className="text-sm font-bold text-red-700">
                Fontos nyilatkozat
              </p>
              <p className="mt-1 text-sm leading-relaxed text-red-600/80">
                Az oldalon megjelenő árak tájékoztató jellegűek és eltérhetnek a tényleges értékesítési áraktól. A végső ár mindig a partner weboldalán kerül megállapításra. Személyes és fizetési adatokat nem gyűjtünk.
              </p>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className={`p-7 text-center ${stat.bg}`}>
                <p className={`mb-2 text-4xl font-black ${stat.color}`}>{stat.value}</p>
                <p className="text-sm font-medium leading-snug text-muted-foreground">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
