import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/** Must match the inline script key in `index.html` (prevents theme flash). */
export const THEME_STORAGE_KEY = 'currency-theme'

export type Theme = 'light' | 'dark'

function readThemeFromStorage(): Theme {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY)
    if (!raw) return 'dark'
    const parsed = JSON.parse(raw) as { state?: { theme?: Theme } }
    const t = parsed?.state?.theme
    return t === 'light' || t === 'dark' ? t : 'dark'
  } catch {
    return 'dark'
  }
}

export function applyThemeToDocument(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

type ThemeState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: readThemeFromStorage(),
      setTheme: (theme) => {
        set({ theme })
        applyThemeToDocument(theme)
      },
      toggleTheme: () => {
        const next = get().theme === 'dark' ? 'light' : 'dark'
        get().setTheme(next)
      },
    }),
    {
      name: THEME_STORAGE_KEY,
      partialize: (state) => ({ theme: state.theme }),
      onRehydrateStorage: () => (state) => {
        if (state?.theme) applyThemeToDocument(state.theme)
      },
    }
  )
)
