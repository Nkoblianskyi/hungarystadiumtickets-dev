import { GlassCard } from './glass-card'

const stats = [
  { value: '15', label: 'Ország lefedve', color: 'text-sky-600' },
  { value: '500+', label: 'Esemény évente', color: 'text-primary' },
  { value: '6', label: 'Partner platform', color: 'text-emerald-600' },
  { value: '24/7', label: 'Frissített árak', color: 'text-violet-600' },
]

const features = [
  {
    title: 'Teljes átláthatóság',
    desc: 'Egyetlen helyen látja az összes nagy platform aktuális árait, egymás mellett összehasonlítva. Nincs szükség több oldalt felkeresni.',
    wide: true,
    accent: 'border-sky-200/60 bg-sky-50/50',
    tag: 'Fő funkció',
    tagColor: 'bg-sky-100 text-sky-700',
  },
  {
    title: '100% Adatvédelem',
    desc: 'Nem gyűjtünk személyes adatokat, nem tárolunk fizetési információkat. A vásárlás mindig a partnernél zajlik.',
    wide: false,
    accent: 'border-red-200/60 bg-red-50/50',
    tag: 'Garancia',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    title: 'Teljesen ingyenes',
    desc: 'Az összehasonlítás ingyenes. Nincs regisztráció, nincs személyes adat megadása.',
    wide: false,
    accent: 'border-green-200/60 bg-green-50/50',
    tag: 'Ingyenes',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Naprakész adatok',
    desc: 'Rendszeresen frissítjük az árakat, hogy mindig a legfrissebb információkat lássa.',
    wide: false,
    accent: 'border-amber-200/60 bg-amber-50/50',
    tag: 'Valós idő',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Magyar és európai lefedettség',
    desc: 'Magyar és európai sportesemények egyaránt elérhetők platformunkon.',
    wide: false,
    accent: 'border-violet-200/60 bg-violet-50/50',
    tag: 'Teljes lefedés',
    tagColor: 'bg-violet-100 text-violet-700',
  },
]

export function UniqueInfoSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/65 px-4 py-1.5 text-sm font-semibold text-accent shadow-sm backdrop-blur-sm">
            Miért minket válasszon?
          </span>
          <h2 className="mb-4 text-4xl font-black leading-tight text-foreground text-balance sm:text-5xl">
            Az egyetlen valóban átlátható sportjegy összehasonlító
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Nincs rejtett díj, nincs adatgyűjtés, nincs nyomás.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-6 text-center">
              <p className={`mb-1 text-4xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <GlassCard
              key={f.title}
              className={`p-7 ${f.accent} ${f.wide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <span className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold ${f.tagColor}`}>
                {f.tag}
              </span>
              <h3 className="mb-3 text-xl font-black text-foreground">{f.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
