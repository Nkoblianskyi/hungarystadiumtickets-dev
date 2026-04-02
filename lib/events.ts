export interface Event {
  id: string
  title: string
  date: string
  location: string
  venue: string
  city: string
  country: string
  sport: string
  priceFrom: number
  priceTo: number
  image: string
  partners: {
    name: string
    price: number
    url: string
  }[]
}

export const events: Event[] = [
  {
    id: 'budapest-fc-bayern-2026',
    title: 'Budapest FC vs Bayern München',
    date: '2026. június 15.',
    location: 'Puskás Aréna',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    sport: 'Labdarúgás',
    priceFrom: 12500,
    priceTo: 45000,
    image: '/images/event-1.jpg',
    partners: [
      { name: 'TicketMaster', price: 15000, url: 'https://ticketmaster.com' },
      { name: 'Eventim', price: 14500, url: 'https://www.eventim.hu' },
      { name: 'JegyMester', price: 12500, url: 'https://jegymester.hu' }
    ]
  },
  {
    id: 'hungaroring-f1-2026',
    title: 'Magyar Nagydíj - Formula 1',
    date: '2026. július 25.',
    location: 'Hungaroring',
    venue: 'Hungaroring',
    city: 'Mogyoród',
    country: 'Magyarország',
    sport: 'Formula 1',
    priceFrom: 35000,
    priceTo: 120000,
    image: '/images/event-2.jpg',
    partners: [
      { name: 'TicketMaster', price: 82000, url: 'https://ticketmaster.com' },
      { name: 'Eventim', price: 79000, url: 'https://www.eventim.hu' },
      { name: 'Viagogo', price: 76000, url: 'https://viagogo.com' }
    ]
  },
  {
    id: 'real-madrid-barcelona-2026',
    title: 'Real Madrid vs FC Barcelona - El Clásico',
    date: '2026. május 20.',
    location: 'Santiago Bernabéu',
    venue: 'Santiago Bernabéu',
    city: 'Madrid',
    country: 'Spanyolország',
    sport: 'Labdarúgás',
    priceFrom: 45000,
    priceTo: 180000,
    image: '/images/event-3.jpg',
    partners: [
      { name: 'TicketMaster ES', price: 92000, url: 'https://ticketmaster.com' },
      { name: 'StubHub', price: 89000, url: 'https://stubhub.com' },
      { name: 'Viagogo', price: 85000, url: 'https://viagogo.com' }
    ]
  },
  {
    id: 'debrecen-basketball-2026',
    title: 'DVSC-DEAC vs Zenit - Euroliga',
    date: '2026. szeptember 10.',
    location: 'Főnix Aréna',
    venue: 'Főnix Aréna',
    city: 'Debrecen',
    country: 'Magyarország',
    sport: 'Kosárlabda',
    priceFrom: 4500,
    priceTo: 18000,
    image: '/images/event-4.jpg',
    partners: [
      { name: 'JegyMester', price: 5500, url: 'https://jegymester.hu' },
      { name: 'Eventim', price: 5200, url: 'https://eventim.hu' },
      { name: 'InterTicket', price: 4900, url: 'https://interticket.hu' }
    ]
  },
  {
    id: 'wimbledon-2026',
    title: 'Wimbledon Tennis Bajnokság',
    date: '2026. június 28.',
    location: 'All England Club',
    venue: 'All England Lawn Tennis and Croquet Club',
    city: 'London',
    country: 'Egyesült Királyság',
    sport: 'Tenisz',
    priceFrom: 28000,
    priceTo: 95000,
    image: '/images/event-5.jpg',
    partners: [
      { name: 'TicketMaster UK', price: 62000, url: 'https://ticketmaster.com' },
      { name: 'StubHub UK', price: 58000, url: 'https://stubhub.co.uk' },
      { name: 'Viagogo', price: 55000, url: 'https://viagogo.com' }
    ]
  },
  {
    id: 'euro-2026-budapest',
    title: 'EURO 2026 - Magyarország vs Németország',
    date: '2026. június 18.',
    location: 'Puskás Aréna',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    sport: 'Labdarúgás',
    priceFrom: 22000,
    priceTo: 85000,
    image: '/images/event-6.jpg',
    partners: [
      { name: 'TicketMaster', price: 52000, url: 'https://ticketmaster.com' },
      { name: 'Eventim', price: 49000, url: 'https://www.eventim.hu' },
      { name: 'StubHub', price: 46000, url: 'https://stubhub.com' }
    ]
  },
  {
    id: 'motogp-hungaroring-2026',
    title: 'MotoGP Magyarország',
    date: '2026. augusztus 15.',
    location: 'Hungaroring',
    venue: 'Hungaroring',
    city: 'Mogyoród',
    country: 'Magyarország',
    sport: 'MotoGP',
    priceFrom: 18000,
    priceTo: 65000,
    image: '/images/event-7.jpg',
    partners: [
      { name: 'TicketMaster', price: 39000, url: 'https://ticketmaster.com' },
      { name: 'Eventim', price: 38000, url: 'https://www.eventim.hu' },
      { name: 'Viagogo', price: 35000, url: 'https://viagogo.com' }
    ]
  },
  {
    id: 'liverpool-manchester-2026',
    title: 'Liverpool FC vs Manchester United',
    date: '2026. október 5.',
    location: 'Anfield',
    venue: 'Anfield Stadium',
    city: 'Liverpool',
    country: 'Egyesült Királyság',
    sport: 'Labdarúgás',
    priceFrom: 38000,
    priceTo: 125000,
    image: '/images/event-8.jpg',
    partners: [
      { name: 'TicketMaster UK', price: 82000, url: 'https://ticketmaster.co.uk' },
      { name: 'StubHub UK', price: 78000, url: 'https://stubhub.co.uk' },
      { name: 'Viagogo', price: 74000, url: 'https://viagogo.com' }
    ]
  },
  {
    id: 'handball-champions-2026',
    title: 'Pick Szeged vs THW Kiel - Kézilabda BL',
    date: '2026. november 12.',
    location: 'Pick Aréna',
    venue: 'Pick Aréna',
    city: 'Szeged',
    country: 'Magyarország',
    sport: 'Kézilabda',
    priceFrom: 3500,
    priceTo: 12000,
    image: '/images/event-9.jpg',
    partners: [
      { name: 'JegyMester', price: 4200, url: 'https://jegymester.hu' },
      { name: 'InterTicket', price: 4000, url: 'https://interticket.hu' },
      { name: 'Eventim', price: 3800, url: 'https://eventim.hu' }
    ]
  },
  {
    id: 'paris-psg-marseille-2026',
    title: 'Paris Saint-Germain vs Olympique Marseille',
    date: '2026. április 12.',
    location: 'Parc des Princes',
    venue: 'Parc des Princes',
    city: 'Párizs',
    country: 'Franciaország',
    sport: 'Labdarúgás',
    priceFrom: 32000,
    priceTo: 115000,
    image: '/images/event-10.jpg',
    partners: [
      { name: 'TicketMaster', price: 72000, url: 'https://ticketmaster.com' },
      { name: 'StubHub', price: 68000, url: 'https://stubhub.com' },
      { name: 'Viagogo', price: 64000, url: 'https://viagogo.com' }
    ]
  },
  {
    id: 'bayern-dortmund-2026',
    title: 'Bayern München vs Borussia Dortmund',
    date: '2026. május 8.',
    location: 'Allianz Arena',
    venue: 'Allianz Arena',
    city: 'München',
    country: 'Németország',
    sport: 'Labdarúgás',
    priceFrom: 35000,
    priceTo: 105000,
    image: '/images/event-11.jpg',
    partners: [
      { name: 'TicketMaster', price: 69000, url: 'https://ticketmaster.com' },
      { name: 'Eventim', price: 65000, url: 'https://www.eventim.hu' },
      { name: 'StubHub', price: 62000, url: 'https://stubhub.com' }
    ]
  },
  {
    id: 'ice-hockey-budapest-2026',
    title: 'MAC Budapest vs Red Bull Salzburg',
    date: '2026. december 5.',
    location: 'Tüskecsarnok',
    venue: 'Tüskecsarnok',
    city: 'Budapest',
    country: 'Magyarország',
    sport: 'Jégkorong',
    priceFrom: 2800,
    priceTo: 9500,
    image: '/images/event-12.jpg',
    partners: [
      { name: 'JegyMester', price: 3500, url: 'https://jegymester.hu' },
      { name: 'InterTicket', price: 3300, url: 'https://interticket.hu' },
      { name: 'Eventim', price: 3100, url: 'https://eventim.hu' }
    ]
  },
  {
    id: 'rugby-six-nations-2026',
    title: 'Hat Nemzet Kupa - Wales vs Írország',
    date: '2026. március 14.',
    location: 'Principality Stadium',
    venue: 'Principality Stadium',
    city: 'Cardiff',
    country: 'Wales',
    sport: 'Rögbi',
    priceFrom: 22000,
    priceTo: 68000,
    image: '/images/event-13.jpg',
    partners: [
      { name: 'TicketMaster', price: 45000, url: 'https://ticketmaster.co.uk' },
      { name: 'StubHub', price: 42000, url: 'https://stubhub.co.uk' },
      { name: 'Viagogo', price: 39000, url: 'https://viagogo.com' }
    ]
  },
  {
    id: 'atletico-barcelona-2026',
    title: 'Atlético Madrid vs FC Barcelona',
    date: '2026. szeptember 22.',
    location: 'Wanda Metropolitano',
    venue: 'Cívitas Metropolitano',
    city: 'Madrid',
    country: 'Spanyolország',
    sport: 'Labdarúgás',
    priceFrom: 28000,
    priceTo: 95000,
    image: '/images/event-14.jpg',
    partners: [
      { name: 'TicketMaster', price: 62000, url: 'https://ticketmaster.com' },
      { name: 'StubHub', price: 58000, url: 'https://stubhub.com' },
      { name: 'Viagogo', price: 54000, url: 'https://viagogo.com' }
    ]
  },
  {
    id: 'volleyball-champions-2026',
    title: 'Röplabda BL - Kaposvár vs Zenit',
    date: '2026. november 28.',
    location: 'Kaposvár Aréna',
    venue: 'Kaposvár Aréna',
    city: 'Kaposvár',
    country: 'Magyarország',
    sport: 'Röplabda',
    priceFrom: 2500,
    priceTo: 7500,
    image: '/images/event-15.jpg',
    partners: [
      { name: 'JegyMester', price: 3200, url: 'https://jegymester.hu' },
      { name: 'InterTicket', price: 3000, url: 'https://interticket.hu' },
      { name: 'Eventim', price: 2800, url: 'https://eventim.hu' }
    ]
  }
]
