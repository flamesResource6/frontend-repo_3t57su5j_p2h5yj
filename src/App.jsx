import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import { About, Projects, Experience, Contact, TechCloud } from './components/Sections'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function App() {
  const [projects, setProjects] = useState([])
  const [experience, setExperience] = useState([])

  useEffect(() => {
    fetch(`${API}/api/projects`).then(r=>r.json()).then(setProjects).catch(()=>{})
    fetch(`${API}/api/experience`).then(r=>r.json()).then(setExperience).catch(()=>{})
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Hero />
      <About />
      <Projects items={projects} />
      <Experience items={experience} />
      <TechCloud />
      <Contact />
      <footer className="py-12 text-center text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Backend Developer Portfolio</footer>
    </div>
  )
}
