import { BarChart3, Globe2, Lock, Wallet } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const services = [
  {
    icon: Globe2,
    title: 'Multi-currency accounts',
    description:
      'Hold, send, and receive in 40+ currencies with transparent spreads and same-day settlement windows.',
  },
  {
    icon: BarChart3,
    title: 'Risk & exposure analytics',
    description:
      'Live dashboards for VaR, counterparty limits, and scenario stress tests across your book.',
  },
  {
    icon: Wallet,
    title: 'Automated treasury workflows',
    description:
      'Rules-based sweeps, approvals, and ERP sync so your team spends time on strategy—not data entry.',
  },
  {
    icon: Lock,
    title: 'Compliance built in',
    description:
      'Audit trails, role-based access, and exportable reports aligned with regional reporting standards.',
  },
] as const

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-border py-20 sm:py-24"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="services-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Everything your finance stack was missing
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            From regional subsidiaries to global hedging programs, Currency
            scales with your policies and your people.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <Card className="h-full border-border/80 transition-colors hover:border-primary/30">
                <CardHeader>
                  <span className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <a
                    href="#contact"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Talk to sales
                  </a>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
