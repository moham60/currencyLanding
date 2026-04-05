import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { ThemeToggle } from '@/components/ThemeToggle'
import { Button} from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { primaryNav } from './nav'
import { HashLink } from 'react-router-hash-link'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-sm supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <HashLink
          to="#hero"
          smooth
          className="flex items-center gap-2 font-semibold tracking-tight text-foreground"
        >
          <span
            className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground"
            aria-hidden
          >
            C
          </span>
          Currency
        </HashLink>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <HashLink
              smooth
              key={item.href}
              to={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </HashLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
         
         
          <Button
            variant="outline"
            size="icon-sm"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-border md:hidden',
          open ? 'block' : 'hidden'
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
          aria-label="Mobile primary"
        >
          {primaryNav.map((item) => (
            <HashLink
              smooth
              key={item.href}
              to={item.href}
              className="rounded-lg px-3 py-3 text-sm text-foreground hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </HashLink>
          ))}
        
        </nav>
      </div>
    </header>
  )
}
