import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GlassCard } from '@/components/glass-card'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-44 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full border border-sky-200/80 bg-white/70 px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur-sm">
              Jogi információk
            </span>
            <h1 className="mb-4 text-4xl font-black leading-tight text-foreground sm:text-5xl">
              Adatvédelmi szabályzat
            </h1>
            <p className="text-lg text-muted-foreground">
              Utolsó frissítés: 2026.
            </p>
          </div>

          <div className="space-y-6">
            <GlassCard className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">1. Bevezetés</h2>
              <p className="leading-relaxed text-muted-foreground">
                A Hungary Stadium Tickets (a továbbiakban: "mi", "Platform") elkötelezett az Ön adatainak védelme mellett. 
                Ez az adatvédelmi szabályzat ismerteti, hogyan kezeljük az Ön által megosztott információkat platformunk használata során.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">2. Milyen adatokat gyűjtünk?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">2.1. Automatikusan gyűjtött adatok</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Platformunk használata során automatikusan bizonyos információkat gyűjthetünk, beleértve:
                  </p>
                  <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                    <li>IP-cím</li>
                    <li>Böngésző típusa és verziója</li>
                    <li>Látogatott oldalak és időpontok</li>
                    <li>Hivatkozó URL</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">2.2. Önkéntesen megadott adatok</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Platformunk NEM kér és NEM gyűjt személyes azonosításra alkalmas adatokat. Nem kérünk nevet, 
                    e-mail címet, telefonszámot vagy bármilyen más személyes információt.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 border-red-200/60 bg-red-50/50">
              <h2 className="mb-4 text-2xl font-bold text-red-700">3. FONTOS: Fizetési és vásárlási adatok</h2>
              <p className="mb-3 font-semibold leading-relaxed text-red-700">
                A Hungary Stadium Tickets NEM értékesít jegyeket és NEM kezel fizetési műveleteket.
              </p>
              <p className="leading-relaxed text-red-900/80">
                Minden vásárlás közvetlenül a partner platformokon (pl. Ticketmaster, StubHub, Viagogo) történik. 
                Mi kizárólag összehasonlítási szolgáltatást nyújtunk. A partner platformok saját adatvédelmi 
                szabályzatuknak megfelelően kezelik az Ön által megadott adatokat.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">4. Cookie-k használata</h2>
              <p className="mb-3 leading-relaxed text-muted-foreground">
                Platformunk cookie-kat használhat a felhasználói élmény javítása érdekében. A cookie-k kis 
                szöveges fájlok, amelyeket a böngésző tárol.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Használt cookie típusok:</strong></p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>Szükséges cookie-k: A platform működéséhez elengedhetetlenek</li>
                  <li>Analitikai cookie-k: Látogatási statisztikák gyűjtése (Google Analytics)</li>
                </ul>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                További információ: <a href="/cookie-policy" className="font-semibold text-primary hover:underline">Cookie szabályzat</a>
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">5. Adatkezelés célja</h2>
              <p className="mb-3 leading-relaxed text-muted-foreground">
                Az általunk gyűjtött adatokat kizárólag a következő célokra használjuk:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>A platform működésének biztosítása</li>
                <li>Látogatási statisztikák készítése (anonim módon)</li>
                <li>A felhasználói élmény javítása</li>
                <li>Technikai problémák azonosítása és megoldása</li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">6. Adattovábbítás harmadik félnek</h2>
              <p className="leading-relaxed text-muted-foreground">
                Az Ön adatait NEM adjuk el, NEM adjuk ki és NEM osztjuk meg harmadik felekkel marketing célokra. 
                Kivétel: ha jogszabály kötelez minket erre, vagy ha Ön egy partner platform linkjére kattint, 
                ekkor az adott platform saját adatvédelmi szabályzata lép életbe.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">7. Adatbiztonság</h2>
              <p className="leading-relaxed text-muted-foreground">
                Komolyan vesszük az adatbiztonságot és megfelelő technikai és szervezeti intézkedéseket teszünk 
                az adatok védelme érdekében. Ugyanakkor fontos megjegyezni, hogy az interneten keresztüli adatátvitel 
                nem 100%-ban biztonságos, és nem tudjuk garantálni a platform felé továbbított adatok abszolút biztonságát.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">8. Az Ön jogai (GDPR szerint)</h2>
              <p className="mb-3 leading-relaxed text-muted-foreground">
                Az Európai Unió Általános Adatvédelmi Rendelete (GDPR) szerint Önnek joga van:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Hozzáférés:</strong> Kérheti az Önről tárolt adatok másolatát</li>
                <li><strong className="text-foreground">Helyesbítés:</strong> Kérheti az Önről tárolt helytelen adatok javítását</li>
                <li><strong className="text-foreground">Törlés:</strong> Kérheti az Önről tárolt adatok törlését</li>
                <li><strong className="text-foreground">Korlátozás:</strong> Kérheti adatai kezelésének korlátozását</li>
                <li><strong className="text-foreground">Tiltakozás:</strong> Tiltakozhat az adatkezelés ellen</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Fontos: Mivel NEM gyűjtünk személyazonosításra alkalmas adatokat, ezek a jogok korlátozott 
                mértékben alkalmazhatók platformunkon.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">9. Gyermekek adatainak védelme</h2>
              <p className="leading-relaxed text-muted-foreground">
                Platformunk nem 13 év alatti gyermekek számára készült, és tudatosan nem gyűjtünk tőlük 
                személyes adatokat. Ha tudomásunkra jut, hogy gyermek adatait gyűjtöttük, azonnal töröljük azokat.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">10. Változások ebben a szabályzatban</h2>
              <p className="leading-relaxed text-muted-foreground">
                Fenntartjuk a jogot, hogy ezt az adatvédelmi szabályzatot bármikor módosítsuk. Minden változásról 
                ezen az oldalon értesítjük Önt, a "Utolsó frissítés" dátum megváltoztatásával.
              </p>
            </GlassCard>

            <GlassCard className="p-8 border-sky-200/60 bg-sky-50/50">
              <h2 className="mb-4 text-2xl font-bold text-sky-700">11. Kapcsolat</h2>
              <p className="mb-4 leading-relaxed text-sky-900/80">
                Ha bármilyen kérdése van ezzel az adatvédelmi szabályzattal kapcsolatban, vagy élni szeretne 
                valamelyik jogával, kérjük, vegye fel velünk a kapcsolatot:
              </p>
              <div className="space-y-1 text-sky-900/80">
                <p><strong className="text-sky-700">E-mail:</strong> privacy@hungarystadiumtickets.com</p>
                <p><strong className="text-sky-700">Cím:</strong> Hungary Stadium Tickets, Budapest, Magyarország</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
