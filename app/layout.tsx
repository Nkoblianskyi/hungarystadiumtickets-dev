import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Hungary Stadium Tickets - Sportesemények Ár-Összehasonlítás',
  description: 'Hasonlítsa össze a jegyárakat a legjobb sportesemények számára Magyarországon és Európában. Megbízható árösszehasonlító szolgáltatás.',
  keywords: ['sport jegyek', 'jegy árak', 'Magyarország', 'stadion jegyek', 'ár-összehasonlítás'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
