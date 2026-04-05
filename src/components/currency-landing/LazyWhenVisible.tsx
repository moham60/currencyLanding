import { useEffect, useRef, useState, type ReactNode } from 'react'

import { subscribeIntersection } from '@/lib/observe-intersection'

import { SectionSkeleton } from './SectionSkeleton'

type LazyWhenVisibleProps = {
  children: ReactNode
  /** Distance from viewport to start loading (larger = earlier fetch, more initial work). */
  rootMargin?: string
  /** Reserve space before content mounts to limit layout shift. */
  minHeight?: string
  /** Shown until the section is near the viewport. */
  fallback?: ReactNode
  className?: string
}

/**
 * Defers mounting `children` until the wrapper intersects the viewport,
 * so `React.lazy` chunks load only when the user scrolls near this block.
 */
export function LazyWhenVisible({
  children,
  rootMargin = '100px 0px',
  minHeight = 'min(60vh, 520px)',
  fallback,
  className,
}: LazyWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return

    return subscribeIntersection(el, rootMargin, () => setVisible(true))
  }, [visible, rootMargin])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        minHeight: visible ? undefined : minHeight,
        contentVisibility: visible ? undefined : 'auto',
        containIntrinsicSize: visible ? undefined : '480px',
      }}
      data-lazy-root={visible ? 'ready' : 'pending'}
    >
      {visible ? children : (fallback ?? <SectionSkeleton />)}
    </div>
  )
}
