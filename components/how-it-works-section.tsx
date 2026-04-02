import { GlassCard } from './glass-card'

const steps = [
  {
    number: '01',
    title: 'Böngésszen az eseményeken',
    desc: 'Fedezze fel a közelgő sportesemények teljes kínálatát Magyarországon és egész Európában, sportáganként szűrve.',
    accent: 'text-sky-600',
    bg: 'border-sky-200/60 bg-sky-50/40',
  },
  {
    number: '02',
    title: 'Hasonlítsa össze az árakat',
    desc: 'Több jegyértékesítő aktuális árait jelenítjük meg egymás mellett, egyetlen nézetben — valós időben.',
    accent: 'text-primary',
    bg: 'border-orange-200/60 bg-orange-50/40',
  },
  {
    number: '03',
    title: 'Válassza a legjobb ajánlatot',
    desc: 'Összehasonlítás után a kiválasztott partner weboldalára irányítjuk, ahol kényelmesen megvásárolhatja jegyét.',
    accent: 'text-emerald-600',
    bg: 'border-emerald-200/60 bg-emerald-50/40',
  },
  {
    number: '04',
    title: 'Fizetés a partner oldalán',
    desc: 'Minden tranzakció a partner platformján zajlik. Semmilyen fizetési adatot nem kezelünk — ez garantált.',
    accent: 'text-violet-600',
    bg: 'border-violet-200/60 bg-violet-50/40',
  },
]

const guarantees = [
  { text: 'Nem értékesítünk jegyeket közvetlen', icon: '✓' },
  { text: 'Nem gyűjtünk fizetési adatokat', icon: '✓' },
  { text: 'Nem tárolunk személyes adatokat', icon: '✓' },
  { text: 'Az összehasonlítás 100% ingyenes', icon: '✓' },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/65 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
            Hogyan működünk
          </span>
          <h2 className="mb-4 text-4xl font-black leading-tight text-foreground text-balance sm:text-5xl">
            Egyszerű. Átlátható. Megbízható.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Nem vagyunk jegyértékesítő — ár-összehasonlító aggregátor vagyunk. Semmi több, semmi kevesebb.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <GlassCard key={step.number} className={`relative overflow-hidden p-6 ${step.bg}`}>
              <span className={`mb-3 block text-3xl font-black ${step.accent}`}>
                {step.number}
              </span>
              <h3 className="mb-2 text-base font-bold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Guarantees panel */}
        <div className="mt-8 rounded-2xl border border-white/70 bg-white/50 p-6 shadow-[0_4px_24px_oklch(0.6_0.04_220/0.1)] backdrop-blur-xl sm:p-8">
          <p className="mb-6 text-center text-lg font-bold text-foreground">
            Amit garantálunk
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">
                  {g.icon}
                </span>
                <span className="text-sm font-medium leading-snug text-foreground">{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
