import Image from 'next/image'
import Link from 'next/link'
import { GlassCard } from './glass-card'
import type { Event } from '@/lib/events'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`} className="group block h-full">
      <GlassCard className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_oklch(0.6_0.04_220/0.18)]">
        {/* Image */}
        <div className="relative h-44 overflow-hidden shrink-0">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          {/* Sport badge */}
          <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-primary/90 px-3 py-1 text-xs font-bold text-white shadow backdrop-blur-sm">
            {event.sport}
          </span>
          {/* Country */}
          <span className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-xs font-semibold text-foreground shadow backdrop-blur-sm">
            {event.country}
          </span>
          {/* Date on image bottom */}
          <p className="absolute bottom-3 left-3 text-xs font-semibold text-white/90 drop-shadow">
            {event.date}
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-1 text-base font-bold leading-tight text-foreground line-clamp-2 flex-1">
            {event.title}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {event.venue}, {event.city}
          </p>

          {/* Price comparison block */}
          <div className="mb-4 rounded-xl border border-primary/15 bg-gradient-to-r from-orange-50/80 to-amber-50/60 p-3">
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Ár-összehasonlítás
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-primary">
                {event.priceFrom.toLocaleString('hu-HU')}
              </span>
              <span className="text-sm font-semibold text-muted-foreground">–</span>
              <span className="text-xl font-black text-accent">
                {event.priceTo.toLocaleString('hu-HU')}
              </span>
              <span className="text-sm font-bold text-muted-foreground">Ft</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {event.partners.length} partnerplatform összehasonlítva
            </p>
          </div>

          {/* DISCLAIMER — Google-compliant: same size as body text, permanently visible */}
          <div className="rounded-xl bg-red-700 px-4 py-3 text-white">
            <p className="text-sm font-bold leading-snug sm:text-base">
              <strong className="block font-black">VТОРИННИЙ PÁC — NEM ÉRTÉKESÍTÜNK JEGYEKET</strong>
              Perепродált jegyek ár-összehasonlítása. Az árak meghaladhatják a névértéket. Vásárlás a partner weboldalán zajlik.
            </p>
          </div>
        </div>
      </GlassCard>
    </Link>
  )
}
