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

const projects = [
  {
    num: '01',
    name: 'Lexora AI',
    role: 'Contract Intelligence',
    desc: 'NLP pipeline that compresses contract review from days to minutes — clause extraction, risk scoring, and plain-language summaries with a validation layer that catches hallucinations.',
    stack: ['Python', 'Transformers', 'FastAPI', 'React', 'SQLite'],
    img: '/assets/images/lexora.png',
    fallback: '/assets/images/lexora.svg',
    repo: 'https://github.com/DvyanshuM9521/LexoraAI',
  },
  {
    num: '02',
    name: 'SentinelAI SOC',
    role: 'Cybersecurity Operations',
    desc: 'Security operations dashboard engineered for triage speed — risk-ranked incident queues, automated attack chain reconstruction, and D3 threat visualisation.',
    stack: ['React', 'FastAPI', 'Python', 'D3.js', 'MySQL'],
    img: '/assets/images/sentinel.png',
    fallback: '/assets/images/sentinel.svg',
    repo: 'https://github.com/DvyanshuM9521/SentinelAI-SOC',
  },
  {
    num: '03',
    name: 'Self-Healing Microgrid',
    role: 'Autonomous Grid Recovery',
    desc: 'Deep RL + GNN agent that detects, isolates, and recovers from power-grid faults before a human operator could be paged — generalises to unseen topologies.',
    stack: ['Python', 'PyTorch', 'GNN', 'PPO', 'FastAPI'],
    img: '/assets/images/microgrid.png',
    fallback: '/assets/images/microgrid.svg',
    repo: 'https://github.com/DvyanshuM9521/self_healing_microgrid',
  },
]

function ProjectCard({ project, delay }) {
  return (
    <FadeUp delay={delay}>
      <motion.div
        className="group relative overflow-hidden rounded-2xl border border-white/[0.06] cursor-default"
        style={{ background: '#0a0f1e' }}
        whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.11)' }}
        transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
      >
        {/* Screenshot */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <motion.img
            src={project.img}
            onError={(e) => { e.currentTarget.src = project.fallback }}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
          />
          {/* gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 50%, #0a0f1e 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="px-6 pb-6 pt-3">
          <p className="text-[11px] text-slate-600 font-mono mb-1">{project.num}</p>
          <h3 className="text-[17px] font-semibold text-white tracking-tight leading-snug">
            {project.name}
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5 mb-3">{project.role}</p>
          <p className="text-[13px] text-slate-400 leading-relaxed mb-5">{project.desc}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-1 rounded-md font-mono text-slate-500"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] text-slate-500 hover:text-white transition-colors duration-200 group/link"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            View on GitHub
            <svg className="w-2.5 h-2.5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-2xl"
          style={{
            boxShadow: 'inset 0 0 40px rgba(120,150,255,0.04)',
          }}
        />
      </motion.div>
    </FadeUp>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <FadeUp>
        <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-600 uppercase">
          Projects
        </span>
        <h2
          className="font-bold text-white tracking-tight leading-[1.05] mt-4 mb-3"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)' }}
        >
          Featured work.
        </h2>
        <p className="text-slate-500 mb-16 max-w-sm text-[14px]">
          Three systems. Each solving a different hard problem.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} delay={i * 0.09} />
        ))}
      </div>
    </section>
  )
}
