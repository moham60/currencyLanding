import { memo } from 'react'

import { cn } from '@/lib/utils'

type SectionSkeletonProps = {
  className?: string
}

/** Lightweight placeholder while a lazy section loads. */
export const SectionSkeleton = memo(function SectionSkeleton({
  className,
}: SectionSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading section"
      className={cn(
        'rounded-xl border border-border/50 bg-card/30 p-8 animate-pulse',
        className
      )}
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="h-9 w-48 max-w-[40%] rounded-lg bg-muted" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded-md bg-muted/80" />
          <div className="h-4 w-[92%] rounded-md bg-muted/60" />
          <div className="h-4 w-[70%] rounded-md bg-muted/60" />
        </div>
        <div className="grid gap-4 pt-4 sm:grid-cols-2">
          <div className="h-36 rounded-lg bg-muted/40" />
          <div className="h-36 rounded-lg bg-muted/40" />
        </div>
      </div>
    </div>
  )
})
