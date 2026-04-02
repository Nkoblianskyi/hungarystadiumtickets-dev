import Link from 'next/link'
import { Ticket, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/events', label: 'Események' },
  { href: '/about', label: 'Rólunk' },
  { href: '/faq', label: 'GYIK' },
]

const legalLinks = [
  { href: '/cookie-policy', label: 'Cookie Szabályzat' },
  { href: '/privacy-policy', label: 'Adatvédelmi Szabályzat' },
]

export function Footer() {
  return (
    <footer className="mt-24">

      {/* Disclaimer — Google-compliant: secondary market, resold tickets, prices above face value */}
      <div className="bg-red-700 px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-base font-bold leading-relaxed text-white sm:text-lg lg:text-xl">
            <strong className="block text-lg font-black sm:text-xl lg:text-2xl">
              VТОРИННИЙ PÁC (SECONDARY MARKET)
            </strong>
            Ez a weboldal egy vторинний piac — perепrodált jegyeket hasonlítunk össze. Az árak meghaladhatják a névértéket. Jegyeket NEM értékesítünk és fizetési adatokat NEM kezelünk.
          </p>
        </div>
      </div>

      {/* Main footer body */}
      <div className="border-t border-white/50 bg-white/45 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Top section: Brand + 3 columns */}
          <div className="grid gap-10 border-b border-white/50 py-14 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="mb-4 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm">
                  <Ticket className="h-5 w-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="leading-none">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Hungary</span>
                  <span className="block text-sm font-black tracking-tight text-foreground">
                    STADIUM<span className="text-primary">TICKETS</span>
                  </span>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Független sportjegy ár-összehasonlító platform Magyarország és Európa számára. Nem értékesítünk jegyeket.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-5 text-[11px] font-black uppercase tracking-[0.18em] text-foreground/40">
                Oldalak
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="h-px w-3 bg-border transition-all group-hover:w-5 group-hover:bg-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-5 text-[11px] font-black uppercase tracking-[0.18em] text-foreground/40">
                Jogi
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="h-px w-3 bg-border transition-all group-hover:w-5 group-hover:bg-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-[11px] font-black uppercase tracking-[0.18em] text-foreground/40">
                Kapcsolat
              </h3>
              <address className="not-italic space-y-3">
                <p className="text-sm font-bold text-foreground leading-snug">
                  FISCUS NOSTRUM FUND SERVICES LIMITED
                </p>
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                  <span>
                    Myrianthous Anna<br />
                    Panagioti Kaspi 5A<br />
                    Nicosia 1095, Ciprus
                  </span>
                </p>
                <a
                  href="mailto:info@hungarystadiumtickets.com"
                  className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@hungarystadiumtickets.com
                </a>
              </address>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row">
            <p className="font-medium">
              &copy; {new Date().getFullYear()} Hungary Stadium Tickets. Minden jog fenntartva.
            </p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link, i) => (
                <span key={link.href} className="flex items-center gap-4">
                  {i > 0 && <span className="text-border">·</span>}
                  <Link href={link.href} className="font-medium transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
