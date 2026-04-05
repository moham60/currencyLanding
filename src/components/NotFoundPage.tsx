import { ArrowLeft, Home, SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button, buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

/**
 * Standalone 404 for HashRouter catch-all (`path: '*'`).
 * Matches landing visual language: gradients, primary accent, system fonts.
 */
export function NotFoundPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,oklch(0.78_0.14_175/0.22),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.5 0 0 / 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.5 0 0 / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />

      <header className="relative z-10 flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            C
          </span>
          Currency
        </Link>
        <ThemeToggle />
      </header>

      <main
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-4 pb-24 text-center sm:px-6"
        aria-labelledby="not-found-title"
      >
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-sm text-muted-foreground shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-card/40">
          <SearchX className="size-4 shrink-0 text-primary" aria-hidden />
          <span role="status">This page does not exist</span>
        </p>

        <h1
          id="not-found-title"
          className="bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-6xl font-bold tracking-tighter text-transparent sm:text-7xl md:text-8xl"
        >
          404
        </h1>

        <p className="mt-6 max-w-md text-pretty text-base text-muted-foreground sm:text-lg">
          The link may be broken, or the page was moved. Head back to Currency
          and pick up where you left off.
        </p>

        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            to="/"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'gap-2 no-underline'
            )}
          >
            <Home className="size-4" aria-hidden />
            Back to home
          </Link>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="size-4" aria-hidden />
            Go back
          </Button>
        </div>
      </main>
    </div>
  )
}
