/**
 * One IntersectionObserver per `rootMargin` for all deferred sections.
 * Avoids creating N separate observers (lower memory + less main-thread work).
 */
const callbacks = new Map<Element, () => void>()
const observers = new Map<string, IntersectionObserver>()

function getOrCreateObserver(rootMargin: string): IntersectionObserver {
  const cached = observers.get(rootMargin)
  if (cached) return cached

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target
        const cb = callbacks.get(el)
        if (!cb) continue
        observer.unobserve(el)
        callbacks.delete(el)
        cb()
      }
    },
    { root: null, rootMargin, threshold: 0 }
  )
  observers.set(rootMargin, observer)
  return observer
}

/** Subscribe until the element intersects once, then disconnect that target. */
export function subscribeIntersection(
  element: Element,
  rootMargin: string,
  onIntersect: () => void
): () => void {
  const io = getOrCreateObserver(rootMargin)
  callbacks.set(element, onIntersect)
  io.observe(element)
  return () => {
    io.unobserve(element)
    callbacks.delete(element)
  }
}
