import { CalendarClock } from 'lucide-react'

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

export function BookingSection() {
  return (
    <section
      id="booking"
      className="border-b border-border py-20 sm:py-24"
      aria-labelledby="booking-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="booking-title"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Book a tailored walkthrough
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Pick a time that works for your treasury lead. We will map your
              workflows, integrations, and compliance needs in under 45 minutes.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <CalendarClock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span>Live product tour with a solutions engineer</span>
              </li>
              <li className="flex gap-3">
                <CalendarClock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span>Custom sandbox provisioned after the call</span>
              </li>
            </ul>
          </div>

          <Card className="border-border/80 shadow-lg shadow-primary/5">
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
              <CardDescription>
                We will confirm by email. No payment required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="book-name">Name</Label>
                    <Input id="book-name" name="name" required autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="book-email">Work email</Label>
                    <Input
                      id="book-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="book-date">Preferred date</Label>
                    <Input id="book-date" name="date" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="book-time">Time (UTC)</Label>
                    <Input id="book-time" name="time" type="time" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="book-notes">Notes (optional)</Label>
                  <Input
                    id="book-notes"
                    name="notes"
                    placeholder="Regions, ERP, volume…"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Request slot
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
