const faqs = [
  {
    q: 'How does Currency price FX compared to banks?',
    a: 'We publish live mid-market references and a fixed transparent markup. Volume tiers and committed flows unlock better rates—your team always sees the all-in number before execution.',
  },
  {
    q: 'Can we keep our existing bank relationships?',
    a: 'Yes. Currency orchestrates liquidity and reporting across your banking partners. You can route by entity, currency, or policy without replacing core accounts on day one.',
  },
  {
    q: 'What integrations are available?',
    a: 'Native connectors for NetSuite, SAP, Workday, and major TMS tools, plus a REST API and webhooks for custom stacks. Our team helps scope ERP field mapping during onboarding.',
  },
  {
    q: 'Where is data hosted?',
    a: 'Production workloads run in regional clusters with encryption in transit and at rest. We offer data residency options for regulated industries on enterprise plans.',
  },
] as const

export function FAQSection() {
  return (
    <section
      id="faq"
      className="border-b border-border py-20 sm:py-24"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2
          id="faq-title"
          className="text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Straight answers about rollout, pricing, and security.
        </p>
        <div className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-border bg-card/40 px-5 py-1 transition-colors open:bg-card open:shadow-sm"
            >
              <summary className="cursor-pointer list-none py-4 font-medium text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex w-full items-center justify-between gap-4">
                  {item.q}
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-border/60 pb-4 pt-2 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
