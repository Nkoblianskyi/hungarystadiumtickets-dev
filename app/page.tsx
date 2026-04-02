import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { EventsPreviewSection } from '@/components/events-preview-section'
import { UniqueInfoSection } from '@/components/unique-info-section'
import { AboutSection } from '@/components/about-section'
import { PartnersSection } from '@/components/partners-section'
import { FaqSection } from '@/components/faq-section'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <UniqueInfoSection />
        <HowItWorksSection />
        <EventsPreviewSection />
        <AboutSection />
        <PartnersSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
