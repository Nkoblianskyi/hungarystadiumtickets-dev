import { cn } from '@/lib/utils'

/**
 * Google Ads / secondary-market ticketing.
 * `compact` — fixed header bar on inner pages.
 * `hero` — ~20% of hero section, larger type, full copy (home only).
 */
export function LegalDisclaimerBar({ variant = 'compact' }: { variant?: 'compact' | 'hero' }) {
  const isHero = variant === 'hero'

  return (
    <div
      className={cn(
        'w-full border-b border-red-900/20 bg-red-700 text-white',
        isHero && 'flex min-h-[20dvh] shrink-0 flex-col justify-center'
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-7xl',
          isHero ? 'px-4 py-4 sm:px-6 sm:py-5 lg:px-8' : 'px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8'
        )}
      >
        <p
          className={cn(
            'text-center leading-snug sm:leading-relaxed',
            isHero
              ? 'text-lg font-medium sm:text-xl lg:text-2xl'
              : 'text-base leading-relaxed'
          )}
        >
          Ez a weboldal egy <strong className="font-semibold text-white">másodlagos piac</strong> (secondary
          market): <strong className="font-semibold text-white">viszonteladott (újraértékesített) jegyek</strong>{' '}
          árait hasonlítjuk össze.{' '}
          <strong className="font-semibold text-white">Az árak meghaladhatják a jegy névértékét.</strong> Jegyeket
          nem értékesítünk; a vásárlás a partner oldalán történik, fizetési adatokat nem kezelünk.
        </p>
        {isHero && (
          <p className="mt-4 text-center text-base font-normal leading-snug text-white/95 sm:mt-5 sm:text-lg lg:text-xl">
            A partner weboldalán a teljes fizetendő összeg — beleértve a jegyárat, a szolgáltatási díjakat és az adókat
            — a <strong className="font-semibold text-white">fizetési adatok megadása előtt</strong> látható.
          </p>
        )}
      </div>
    </div>
  )
}
