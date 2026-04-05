import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2
              id="contact-title"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Contact
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sales, partnerships, or press—we route every message to the right
              humans, usually within one business day.
            </p>
            <address className="mt-8 not-italic text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Currency HQ</p>
              <p>120 Market Street, Floor 8</p>
              <p>San Francisco, CA 94105</p>
              <p className="mt-4">
                <a
                  href="mailto:hello@currency.app"
                  className="text-primary hover:underline"
                >
                  hello@currency.app
                </a>
              </p>
            </address>
          </div>

          <Card className="border-border/80 lg:col-span-2">
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>
                Tell us what you are trying to solve—we will follow up with next
                steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" name="name" required autoComplete="name" />
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="contact-company">Company</Label>
                  <Input id="contact-company" name="company" autoComplete="organization" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit">Send message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
