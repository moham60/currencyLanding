import { Globe, ShieldCheck, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <Globe className="size-6 text-primary" />,
    title: "170+ Currencies",
    description:
      "Access live exchange rates for over 170 world currencies, updated in real time so you always have accurate data at your fingertips.",
  },
  {
    icon: <Zap className="size-6 text-primary" />,
    title: "Instant Conversion",
    description:
      "Convert any amount between currencies in milliseconds. No delays, no guesswork — just fast, reliable results.",
  },
  {
    icon: <TrendingUp className="size-6 text-primary" />,
    title: "Historical Trends",
    description:
      "Explore historical exchange rate charts to understand market movements and make informed financial decisions.",
  },
  {
    icon: <ShieldCheck className="size-6 text-primary" />,
    title: "Trusted & Secure",
    description:
      "Powered by verified financial data sources with end-to-end security, so you can rely on every figure we display.",
  },
]

const stats = [
  { value: "170+", label: "Currencies Supported" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "1M+", label: "Daily Conversions" },
  { value: "0ms", label: "Average Latency Goal" },
]

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-background py-24"
      aria-labelledby="about-heading"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            About Us
          </span>
          <h2
            id="about-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Currency exchange,{" "}
            <span className="text-primary">simplified</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We built this platform to give everyone — from individual travellers
            to global businesses — a single, trustworthy destination for
            currency data. No hidden fees, no confusing dashboards, just clarity.
          </p>
        </div>

        {/* Stats row */}
        <div className="mb-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-3xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-medium text-foreground">
            Ready to get started?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="px-8">
              Start Converting
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
