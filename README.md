
- Replaced boilerplate with project-specific content: features, tech stack table, getting started (dev/build/preview/lint), project structure tree, and design token summary

## `src/components/About.tsx`
New self-contained section component:
- **Stats row** — 4 animated cards (170+ currencies, 99.9% uptime, 1M+ daily conversions, 0ms latency goal)
- **Feature cards** — Globe / Zap / TrendingUp / ShieldCheck (Lucide) with hover-lift animation and `bg-primary/10` icon wells
- **CTA row** — primary + outline `Button` variants from `@/components/ui/button`
- Background radial glow via `blur-3xl` div; fully responsive with Tailwind grid breakpoints

Drop-in usage:
```tsx
import { About } from "@/components/About"

<About />
```
