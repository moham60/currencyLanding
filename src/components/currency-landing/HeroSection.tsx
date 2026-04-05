import { ArrowRight, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.78_0.14_175/0.25),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
            <Sparkles className="size-3.5" aria-hidden />
            New: real-time FX alerts
          </Badge>
          <h1
            id="hero-title"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            Treasury and FX operations, unified in one workspace
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty sm:text-xl">
            Currency helps finance teams hedge risk, automate settlements, and
            stay compliant—without spreadsheets or guesswork.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#booking"
              className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
            >
              Start free trial
              <ArrowRight className="size-4" data-icon="inline-end" />
            </a>
            <a
              href="#services"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              Explore services
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            SOC 2 Type II · 99.99% uptime SLA · Dedicated onboarding
          </p>
        </div>
      </div>
    </section>
  )
}
