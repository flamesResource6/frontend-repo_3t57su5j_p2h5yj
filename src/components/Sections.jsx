import { motion } from 'framer-motion'

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle title="About Me" subtitle="Short story, background, and what I love to build" />
      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          I'm a backend developer focused on building reliable APIs and scalable systems. I care about clean interfaces, data integrity, and performance, with a strong focus on observability and developer experience.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {['Node.js','TypeScript','FastAPI','PostgreSQL','Redis','Docker','Kubernetes','Kafka','gRPC','OpenAPI'].map((s)=> (
            <div key={s} className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm text-slate-800 dark:text-white/90">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects({ items=[] }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle title="Projects" subtitle="Selected work focused on APIs, databases, and distributed systems" />
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((p,i)=> (
          <motion.article key={i} whileHover={{ y: -4 }} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack?.map((t)=> (
                <span key={t} className="text-xs rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white/80 px-2.5 py-1 border border-slate-200 dark:border-white/10">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {p.github && <a href={p.github} target="_blank" className="text-brand-500 hover:underline">GitHub</a>}
              {p.api_docs && <a href={p.api_docs} target="_blank" className="text-brand-500 hover:underline">API Docs</a>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function Experience({ items=[] }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle title="Experience" subtitle="Timeline of work, contributions, and projects" />
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10" />
        <div className="space-y-8">
          {items.map((e,i)=> (
            <div key={i} className="relative pl-10">
              <div className="absolute left-0 top-1.5 size-3 rounded-full bg-brand-500 shadow-[0_0_0_3px_rgba(239,68,68,0.2)]" />
              <h4 className="text-base font-semibold text-slate-900 dark:text-white">{e.title} • <span className="font-normal text-slate-600 dark:text-slate-300">{e.organization}</span></h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{e.period}</p>
              <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm">{e.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {e.tags?.map((t)=> (
                  <span key={t} className="text-xs rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white/80 px-2.5 py-1 border border-slate-200 dark:border-white/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  async function submit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    alert(data.status === 'ok' ? 'Message sent! Thank you.' : 'Something went wrong')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-16">
      <SectionTitle title="Contact" subtitle="Let's collaborate or chat about backend engineering" />
      <form onSubmit={submit} className="space-y-4">
        <input name="name" placeholder="Your name" required className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500" />
        <input type="email" name="email" placeholder="Email address" required className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500" />
        <textarea name="message" rows="5" placeholder="Your message" required className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500" />
        <button className="rounded-xl bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 text-sm font-medium">Send Message</button>
      </form>
      <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">
        <a className="hover:underline" href="https://github.com/" target="_blank">GitHub</a>
        <span className="mx-3">•</span>
        <a className="hover:underline" href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
        <span className="mx-3">•</span>
        <a className="hover:underline" href="https://twitter.com/" target="_blank">X/Twitter</a>
      </div>
    </section>
  )
}

export function TechCloud() {
  const tags = ['Node.js','TypeScript','FastAPI','PostgreSQL','Redis','Docker','Kubernetes','Kafka','gRPC','OpenAPI','MongoDB','GraphQL','Terraform','CI/CD','Prometheus','Grafana']
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle title="Tech Stack Cloud" subtitle="A snapshot of tools I use to build scalable systems" />
      <div className="flex flex-wrap gap-3">
        {tags.map((t,i)=> (
          <span key={i} className="text-sm rounded-full px-4 py-2 border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-800 dark:text-white/90 hover:border-brand-500/60 transition">{t}</span>
        ))}
      </div>
    </section>
  )
}
