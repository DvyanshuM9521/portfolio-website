import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}

const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Java'] },
  { label: 'Frontend',  items: ['React', 'HTML / CSS', 'Tailwind', 'D3.js', 'Recharts'] },
  { label: 'Backend',   items: ['FastAPI', 'REST APIs', 'MySQL', 'SQLite'] },
  { label: 'AI / ML',   items: ['PyTorch', 'Scikit-learn', 'Deep RL', 'GNN', 'NLP', 'Pandas'] },
  { label: 'Tooling',   items: ['Git', 'Docker', 'VS Code'] },
]

export default function About() {
  return (
    <section id="about" className="py-36 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-start">

        {/* Left: text */}
        <div>
          <FadeUp>
            <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-600 uppercase">
              About
            </span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2
              className="font-bold text-white tracking-tight leading-[1.08] mt-4 mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)' }}
            >
              Engineering software<br />that scales and thinks.
            </h2>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="text-[15px] text-slate-400 leading-[1.8] mb-4">
              I'm a CS and AI Engineer focused on building production-grade systems
              at the intersection of deep learning, system design, and product
              engineering.
            </p>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="text-[14px] text-slate-500 leading-[1.8]">
              My work spans ML pipelines, real-time operational dashboards,
              backend infrastructure, and frontend interfaces — with an
              emphasis on reliability, clarity, and measurable impact.
            </p>
          </FadeUp>
        </div>

        {/* Right: skill table */}
        <FadeUp delay={0.12}>
          <div
            className="rounded-2xl overflow-hidden border border-white/[0.06]"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            {skillGroups.map((group, i) => (
              <div
                key={group.label}
                className="grid grid-cols-[96px_1fr] gap-4 px-5 py-4 transition-colors duration-200 hover:bg-white/[0.025]"
                style={{
                  borderBottom:
                    i < skillGroups.length - 1
                      ? '1px solid rgba(255,255,255,0.04)'
                      : 'none',
                }}
              >
                <span className="text-[11px] font-medium text-slate-600 uppercase tracking-wider pt-0.5">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {group.items.map((skill) => (
                    <span key={skill} className="text-[13px] text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
