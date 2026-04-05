import { primaryNav } from './nav'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold text-foreground">Currency</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Modern treasury infrastructure for teams that move money globally.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            On this page
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-4 text-center text-xs text-muted-foreground sm:px-6 sm:text-left">
        © {new Date().getFullYear()} Currency Inc. All rights reserved.
      </p>
    </footer>
  )
}
