import { lazy } from 'react'

import { DeferredSection } from './DeferredSection'
import { HeroSection } from './HeroSection'
import { SiteHeader } from './SiteHeader'

const ServicesSection = lazy(() =>
  import('./ServicesSection').then((m) => ({ default: m.ServicesSection }))
)
const BookingSection = lazy(() =>
  import('./BookingSection').then((m) => ({ default: m.BookingSection }))
)
const FAQSection = lazy(() =>
  import('./FAQSection').then((m) => ({ default: m.FAQSection }))
)
const BlogSection = lazy(() =>
  import('./BlogSection').then((m) => ({ default: m.BlogSection }))
)
const ContactSection = lazy(() =>
  import('./ContactSection').then((m) => ({ default: m.ContactSection }))
)
const SiteFooter = lazy(() =>
  import('./SiteFooter').then((m) => ({ default: m.SiteFooter }))
)

const footerFallback = (
  <div
    role="status"
    aria-label="Loading footer"
    className="h-40 animate-pulse rounded-t-xl border-t border-border/60 bg-card/20"
  />
)

export function CurrencyLanding() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <DeferredSection>
          <ServicesSection />
        </DeferredSection>
        <DeferredSection>
          <BookingSection />
        </DeferredSection>
        <DeferredSection>
          <FAQSection />
        </DeferredSection>
        <DeferredSection>
          <BlogSection />
        </DeferredSection>
        <DeferredSection>
          <ContactSection />
        </DeferredSection>
      </main>
      <DeferredSection minHeight="220px" fallback={footerFallback}>
        <SiteFooter />
      </DeferredSection>
    </>
  )
}
