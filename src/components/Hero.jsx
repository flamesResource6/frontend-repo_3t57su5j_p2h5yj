import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import ThemeToggle from './ThemeToggle'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white/90">
            <span className="text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">Open to opportunities</span>
          </motion.div>
          <ThemeToggle />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-[1.2fr,0.8fr] items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Backend Developer — APIs, Databases & Scalable Systems
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-6 max-w-2xl text-lg md:text-xl text-white/85">
              I design and build high-performance backend services with clean APIs, resilient data pipelines, and production-grade observability.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex flex-wrap gap-3">
              <a href="/resume.pdf" download className="rounded-full bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 text-sm font-medium transition">Download Resume</a>
              <a href="#contact" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm font-medium backdrop-blur transition">Contact Me</a>
            </motion.div>
          </div>
          <motion.ul initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delayChildren: 0.2, staggerChildren: 0.06 } } }} className="grid grid-cols-2 gap-3">
            {['Node.js','TypeScript','PostgreSQL','Redis','Docker','Microservices','Kafka','FastAPI'].map((t)=> (
              <motion.li key={t} variants={{ hidden:{opacity:0,y:10}, visible:{opacity:1,y:0} }} className="text-white/90 bg-white/10 rounded-xl px-4 py-3 backdrop-blur border border-white/10 text-sm">
                {t}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
