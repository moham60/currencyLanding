import { memo, Suspense, type ReactNode } from 'react'

import { LazyWhenVisible } from './LazyWhenVisible'
import { SectionSkeleton } from './SectionSkeleton'

const defaultFallback = <SectionSkeleton />

type DeferredSectionProps = {
  children: ReactNode
  minHeight?: string
  /** Placeholder while off-screen or while the lazy chunk loads */
  fallback?: ReactNode
  rootMargin?: string
}

/**
 * Combines viewport-gated mount + Suspense so route-level duplication stays minimal
 * and Suspense fallbacks stay referentially stable between renders.
 */
export const DeferredSection = memo(function DeferredSection({
  children,
  minHeight,
  fallback = defaultFallback,
  rootMargin,
}: DeferredSectionProps) {
  return (
    <LazyWhenVisible
      minHeight={minHeight}
      fallback={fallback}
      rootMargin={rootMargin}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </LazyWhenVisible>
  )
})
