import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GlassCard } from '@/components/glass-card'
import { ExternalLink, ShieldCheck, Globe, Users, Star, ArrowRight } from 'lucide-react'

const partners = [
  {
    name: 'Ticketmaster',
    url: 'https://www.ticketmaster.com/',
    displayUrl: 'ticketmaster.com',
    tag: 'Globális vezető',
    color: 'text-blue-700',
    bg: 'bg-blue-600',
    border: 'border-blue-200/60',
    accent: 'bg-blue-50/70',
    description:
      'A világ legnagyobb jegyértékesítő platformja. Több mint 230 országban elérhető, több mint 500 000 esemény jegyét értékesíti évente. Erős jelenléte van Magyarországon és Európa-szerte.',
    features: ['Biztonságos vásárlás', 'Visszatérítési garancia', 'Mobilos e-jegy', 'Ügyfélszolgálat 24/7'],
    regions: ['Magyarország', 'EU', 'Globális'],
    sports: ['Labdarúgás', 'Tenisz', 'Kosárlabda', 'Motorsport'],
  },
  {
    name: 'Eventim',
    url: 'https://eventim.hu',
    displayUrl: 'eventim.hu',
    tag: 'Európai platform',
    color: 'text-indigo-700',
    bg: 'bg-indigo-600',
    border: 'border-indigo-200/60',
    accent: 'bg-indigo-50/70',
    description:
      'Európa egyik legnagyobb jegyértékesítő szolgáltatója. Különösen erős jelenlét Magyarországon, Németországban és Ausztriában. Széles sportesemény-kínálattal rendelkezik.',
    features: ['Fan Ticket védelem', 'Nyomtatható jegy', 'Mobilos belépés', 'Biztonságos fizetés'],
    regions: ['Magyarország', 'Németország', 'Ausztria', 'EU'],
    sports: ['Labdarúgás', 'Kézilabda', 'Jégkorong', 'Motorsport'],
  },
  {
    name: 'StubHub',
    url: 'https://stubhub.com',
    displayUrl: 'stubhub.com',
    tag: 'Globális másodlagos piac',
    color: 'text-purple-700',
    bg: 'bg-purple-600',
    border: 'border-purple-200/60',
    accent: 'bg-purple-50/70',
    description:
      'A világ vezető másodlagos jegypiac-platformja. Az eladók és vevők között közvetít, így széles ár- és helyszínválasztékot biztosít. Az eBay leányvállalata, megbízható piaci szereplő.',
    features: ['FanProtect garancia', 'Biztonságos csere', 'Mobilos jegy', 'Visszatérítés'],
    regions: ['Globális', 'Európa', 'USA'],
    sports: ['Labdarúgás', 'Rögbi', 'Tenisz', 'Motorsport'],
  },
  {
    name: 'Viagogo',
    url: 'https://viagogo.com',
    displayUrl: 'viagogo.com',
    tag: 'Globális platform',
    color: 'text-green-700',
    bg: 'bg-green-600',
    border: 'border-green-200/60',
    accent: 'bg-green-50/70',
    description:
      'Globális jegypiaci platform, amely több mint 160 országban elérhető. Labdarúgás-, motorsport- és egyéb sportesemények széles választéka, különösen európai bajnokságokra.',
    features: ['Garantált belépés', 'Jegy átvétel', 'Biztonságos fizetés', 'Globális lefedettség'],
    regions: ['Globális', 'Európa', 'Dél-Amerika'],
    sports: ['Labdarúgás', 'Formula 1', 'MotoGP', 'Rögbi'],
  },
  {
    name: 'JegyMester',
    url: 'https://jegymester.hu',
    displayUrl: 'jegymester.hu',
    tag: 'Magyar platform',
    color: 'text-orange-700',
    bg: 'bg-orange-500',
    border: 'border-orange-200/60',
    accent: 'bg-orange-50/70',
    description:
      'Magyarország egyik vezető online jegyértékesítő platformja. Elsősorban hazai sporteseményekre, koncertekre és kulturális rendezvényekre specializálódott. Magyar nyelvű ügyfélszolgálat.',
    features: ['Magyar ügyfélszolgálat', 'Forint alapú árak', 'Helyi sportesemények', 'Gyors kézbesítés'],
    regions: ['Magyarország'],
    sports: ['Labdarúgás', 'Kézilabda', 'Kosárlabda', 'Jégkorong'],
  },
  {
    name: 'InterTicket',
    url: 'https://interticket.hu',
    displayUrl: 'interticket.hu',
    tag: 'Magyar platform',
    color: 'text-red-700',
    bg: 'bg-red-600',
    border: 'border-red-200/60',
    accent: 'bg-red-50/70',
    description:
      'Magyarország egyik legrégebbi és legismertebb jegyértékesítő rendszere. Széles lefedettség hazai sport- és kulturális eseményeken. Több évtizedes tapasztalat a piacon.',
    features: ['Magyar platform', 'Forint alapú', 'Hazai bajnokságok', 'Biztonságos fizatés'],
    regions: ['Magyarország'],
    sports: ['Labdarúgás', 'Kézilabda', 'Röplabda', 'Kosárlabda'],
  },
]

export default function PartnersPage() {
  return (
    <>
      <Header />

      <main className="mx-auto min-h-screen max-w-7xl px-4 py-16 pt-44 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/65 px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" />
            Ellenőrzött partnerek
          </span>
          <h1 className="mb-4 text-4xl font-black text-foreground sm:text-5xl lg:text-6xl text-balance">
            Partner jegyplatformok
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kizárólag létező, megbízható másodlagos jegypiac-platformokkal dolgozunk. Az árak összehasonlítása automatikusan, valós időben történik — vásárlás csak a partner weboldalán lehetséges.
          </p>
        </div>

        {/* Stats row */}
        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: Globe, value: '6', label: 'Partner platform', color: 'text-sky-600' },
            { icon: Star, value: '500+', label: 'Esemény évente', color: 'text-primary' },
            { icon: Users, value: '15+', label: 'Ország lefedve', color: 'text-emerald-600' },
            { icon: ShieldCheck, value: '100%', label: 'Ellenőrzött platformok', color: 'text-violet-600' },
          ].map((stat) => (
            <GlassCard key={stat.label} className="p-5 text-center">
              <stat.icon className={`mx-auto mb-2 h-6 w-6 ${stat.color}`} />
              <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="mt-0.5 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        {/* Partners list */}
        <div className="space-y-6">
          {partners.map((partner) => (
            <GlassCard key={partner.name} className={`overflow-hidden border ${partner.border}`}>
              <div className="grid gap-0 lg:grid-cols-[280px_1fr]">

                {/* Left: identity */}
                <div className={`flex flex-col justify-between gap-6 p-7 ${partner.accent}`}>
                  <div>
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${partner.bg} shadow-md`}>
                      <span className="text-2xl font-black text-white">{partner.name.charAt(0)}</span>
                    </div>
                    <h2 className={`mb-1 text-2xl font-black ${partner.color}`}>{partner.name}</h2>
                    <span className="inline-block rounded-full border border-white/70 bg-white/60 px-3 py-0.5 text-xs font-semibold text-foreground/70 backdrop-blur-sm">
                      {partner.tag}
                    </span>
                  </div>

                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl ${partner.bg} px-4 py-2.5 text-sm font-bold text-white shadow transition-all hover:opacity-90 hover:-translate-y-0.5`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    {partner.displayUrl}
                  </a>
                </div>

                {/* Right: details */}
                <div className="p-7">
                  <p className="mb-6 text-base leading-relaxed text-foreground/80">
                    {partner.description}
                  </p>

                  <div className="grid gap-5 sm:grid-cols-3">
                    {/* Features */}
                    <div>
                      <p className="mb-2 text-xs font-black uppercase tracking-widest text-muted-foreground">Szolgáltatások</p>
                      <ul className="space-y-1.5">
                        {partner.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-foreground/75">
                            <ArrowRight className="h-3 w-3 shrink-0 text-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Regions */}
                    <div>
                      <p className="mb-2 text-xs font-black uppercase tracking-widest text-muted-foreground">Régiók</p>
                      <div className="flex flex-wrap gap-1.5">
                        {partner.regions.map((r) => (
                          <span key={r} className="rounded-lg border border-white/70 bg-white/60 px-2.5 py-1 text-xs font-semibold text-foreground/70 backdrop-blur-sm">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sports */}
                    <div>
                      <p className="mb-2 text-xs font-black uppercase tracking-widest text-muted-foreground">Sportágak</p>
                      <div className="flex flex-wrap gap-1.5">
                        {partner.sports.map((s) => (
                          <span key={s} className="rounded-lg border border-white/70 bg-white/60 px-2.5 py-1 text-xs font-semibold text-foreground/70 backdrop-blur-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom disclaimer per card */}
              <div className="border-t border-white/50 bg-red-700 px-7 py-3">
                <p className="text-sm leading-snug text-white">
                  Vásárlás kizárólag a {partner.name} weboldalán lehetséges; a teljes fizetendő összeg (díjak, adók) a
                  fizetési adatok megadása előtt ott jelenik meg. Ez az oldal nem vesz részt a tranzakcióban. Másodlagos
                  piac — az árak meghaladhatják a névértéket.
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom info box */}
        <GlassCard className="mt-12 p-8 text-center">
          <h3 className="mb-3 text-xl font-black text-foreground">Hogyan működik az összehasonlítás?</h3>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground">
            Automatikusan összegyűjtjük és frissítjük a fenti partnerpaltformok ártáblázatait. Amikor Ön egy eseményre keres jegyet, valós idejű árakat jelenítünk meg minden partnertől — így Ön azonnal látja, hol a legolcsóbb vagy legjobb elhelyezkedésű jegy. A vásárláshoz a partner weboldalára irányítjuk, ahol a tranzakció biztonságosan lezajlik.
          </p>
        </GlassCard>
      </main>

      <Footer />
    </>
  )
}
