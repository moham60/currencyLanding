import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const posts = [
  {
    title: 'Hedging in volatile rate cycles',
    excerpt:
      'How leading teams rebalance exposure weekly without drowning in spreadsheets.',
    date: 'Mar 18, 2026',
    href: '#blog',
  },
  {
    title: 'SOC 2 and treasury tooling',
    excerpt:
      'A practical checklist for vendor reviews when shortlisting FX platforms.',
    date: 'Mar 2, 2026',
    href: '#blog',
  },
  {
    title: 'API design for finance engineers',
    excerpt:
      'Idempotency, settlement windows, and webhooks that accountants actually trust.',
    date: 'Feb 14, 2026',
    href: '#blog',
  },
] as const

export function BlogSection() {
  return (
    <section
      id="blog"
      className="border-b border-border py-20 sm:py-24"
      aria-labelledby="blog-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2
              id="blog-title"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              From the journal
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Notes on markets, infrastructure, and how modern finance teams ship.
            </p>
          </div>
          <a
            href="#blog"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all posts
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <Card className="flex h-full flex-col border-border/80 transition-colors hover:border-primary/25">
                <CardHeader>
                  <time
                    className="text-xs font-medium text-muted-foreground"
                    dateTime={post.date}
                  >
                    {post.date}
                  </time>
                  <CardTitle className="text-lg leading-snug">
                    <a href={post.href} className="hover:text-primary">
                      {post.title}
                    </a>
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-0">
                  <a
                    href={post.href}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Read article
                  </a>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
