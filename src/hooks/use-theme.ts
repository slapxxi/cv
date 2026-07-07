import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')

      if (savedTheme === 'dark' || savedTheme === 'light') {
        const root = window.document.documentElement

        if (savedTheme === 'dark') {
          root.classList.add('dark')
          root.classList.remove('light')
        } else {
          root.classList.add('light')
          root.classList.remove('dark')
        }

        return savedTheme
      }

      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      return systemPrefersDark ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemChange = (e: MediaQueryListEvent) => {
      const hasManualChoice = localStorage.getItem('theme')
      if (!hasManualChoice) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleSystemChange)
    return () => mediaQuery.removeEventListener('change', handleSystemChange)
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  const setThemeValue = (theme: string) => {
    setTheme(theme)
  }

  return {
    theme,
    toggleTheme,
    setTheme: setThemeValue,
    isDark: theme === 'dark',
  }
}
