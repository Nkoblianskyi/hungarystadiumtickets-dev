import { GlassCard } from './glass-card'

const partners = [
  { name: 'TicketMaster', tag: 'Globális vezető', color: 'text-blue-600', dot: 'bg-blue-500' },
  { name: 'Eventim', tag: 'Európai platform', color: 'text-indigo-600', dot: 'bg-indigo-500' },
  { name: 'StubHub', tag: 'Globális platform', color: 'text-purple-600', dot: 'bg-purple-500' },
  { name: 'Viagogo', tag: 'Globális platform', color: 'text-green-600', dot: 'bg-green-500' },
  { name: 'JegyMester', tag: 'Magyar platform', color: 'text-primary', dot: 'bg-primary' },
  { name: 'Jegy', tag: 'Magyar platform', color: 'text-orange-600', dot: 'bg-orange-500' },
]

export function PartnersSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white/65 px-4 py-1.5 text-sm font-semibold text-accent shadow-sm backdrop-blur-sm">
            Partnerek
          </span>
          <h2 className="mb-3 text-4xl font-black text-foreground sm:text-5xl">
            Megbízható platformok
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            Ezekről a platformokról gyűjtjük és hasonlítjuk össze az árakat automatikusan.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <GlassCard
              key={partner.name}
              className="flex flex-col items-center gap-1.5 p-5 text-center transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_oklch(0.6_0.04_220/0.15)]"
            >
              <p className={`text-sm font-bold ${partner.color}`}>{partner.name}</p>
              <p className="text-xs text-muted-foreground">{partner.tag}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-amber-200/60 bg-amber-50/60 px-5 py-3 text-center">
          <p className="text-sm font-medium text-amber-700">
            Csupán árakat jelenítünk meg — a jegyvásárlás kizárólag a partnerek weboldalán történik.
          </p>
        </div>
      </div>
    </section>
  )
}
