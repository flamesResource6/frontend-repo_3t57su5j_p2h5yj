import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'system'
    setTheme(stored)
    applyTheme(stored)
  }, [])

  function applyTheme(mode) {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = mode === 'dark' || (mode === 'system' && prefersDark)
    root.classList.toggle('dark', isDark)
  }

  function setMode(mode) {
    localStorage.setItem('theme', mode)
    setTheme(mode)
    applyTheme(mode)
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
      <button
        onClick={() => setMode('light')}
        className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 transition ${theme==='light' ? 'bg-white text-slate-900' : 'text-white/80 hover:text-white'}`}
        aria-label="Light mode"
      >
        <Sun size={16} /> Light
      </button>
      <button
        onClick={() => setMode('dark')}
        className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 transition ${theme==='dark' ? 'bg-white text-slate-900' : 'text-white/80 hover:text-white'}`}
        aria-label="Dark mode"
      >
        <Moon size={16} /> Dark
      </button>
      <button
        onClick={() => setMode('system')}
        className={`px-3 py-1.5 rounded-full text-sm transition ${theme==='system' ? 'bg-white text-slate-900' : 'text-white/80 hover:text-white'}`}
        aria-label="System theme"
      >
        Auto
      </button>
    </div>
  )
}
