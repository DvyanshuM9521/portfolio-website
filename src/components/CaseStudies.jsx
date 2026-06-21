import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}

const cases = [
  {
    num: '01',
    year: '2024',
    name: 'Lexora AI',
    oneLiner: 'Contract intelligence that compresses legal review from days to minutes.',
    stack: ['Python', 'Transformers (NLP)', 'FastAPI', 'React', 'SQLite'],
    repo: 'https://github.com/DvyanshuM9521/LexoraAI',
    img: '/assets/images/lexora.png',
    fallback: '/assets/images/lexora.svg',
    challenge:
      'Enterprise contracts hide material clauses across dense 50-page documents. Manual legal review runs at $400/hour to find three buried liability clauses. The cost is speed — not expertise.',
    solution:
      'An NLP pipeline purpose-tuned for legal text: clause segmentation, obligation and right extraction, risk classification by clause type, and plain-language summarisation — returning structured analysis in seconds. A rule-based validation layer catches hallucinated obligations before they reach the user.',
    arch: [
      { layer: 'Parsing',          detail: 'PDF/DOCX ingestion → structural segmentation → clause boundary detection' },
      { layer: 'Extraction',       detail: 'NER + relation extraction for parties, dates, obligations, rights' },
      { layer: 'Risk scoring',     detail: 'Per-clause classification: liability, IP, indemnification, jurisdiction' },
      { layer: 'Validation',       detail: 'Rule-based post-processing catches hallucinated obligations pre-output' },
      { layer: 'Interface',        detail: 'Upload → structured report with clause highlights, risk flags, export' },
    ],
    outcome:
      'Contract review compressed from days to under a minute. Correctness was treated as a hard constraint, not an aspiration — functionally equivalent to the core feature of a legal-tech SaaS.',
  },
  {
    num: '02',
    year: '2024',
    name: 'SentinelAI SOC',
    oneLiner: 'Security operations centre built for triage speed, not feature count.',
    stack: ['React', 'FastAPI', 'Python', 'D3.js', 'MySQL'],
    repo: 'https://github.com/DvyanshuM9521/SentinelAI-SOC',
    img: '/assets/images/sentinel.png',
    fallback: '/assets/images/sentinel.svg',
    challenge:
      'SOC analysts process hundreds of alerts per shift. The failure mode isn\'t missing alerts — it\'s alert fatigue: low-priority signals burying the ones that matter. Most commercial dashboards optimise for feature count, not decision speed.',
    solution:
      'Designed around one constraint: an analyst should determine incident severity within three seconds of looking at the screen. Risk scoring models rank the incident queue automatically. Timeline reconstruction surfaces attack progression without manual correlation. Every UI decision — layout, density, colour semantics — was made to serve triage speed.',
    arch: [
      { layer: 'Ingestion',    detail: 'FastAPI event collector normalises telemetry from heterogeneous sources' },
      { layer: 'Risk scoring', detail: 'Scoring engine weights by threat type, asset criticality, behavioural pattern' },
      { layer: 'Correlation',  detail: 'Event clustering by IP, user, time window; automatic attack chain reconstruction' },
      { layer: 'Visualisation',detail: 'D3.js threat map + time-series; incident queue sorted by composite risk score' },
      { layer: 'Persistence',  detail: 'MySQL incident store with audit trail; analyst actions logged for post-incident review' },
    ],
    outcome:
      'A SOC product with the information hierarchy of commercial tools — built independently. The constraint-first design produces an interface that makes analysts faster rather than giving them more to look at.',
  },
  {
    num: '03',
    year: '2024',
    name: 'Self-Healing Microgrid',
    oneLiner: 'Autonomous power-grid agent for fault detection and recovery.',
    stack: ['Python', 'PyTorch', 'Deep RL (PPO)', 'Graph Neural Networks', 'FastAPI'],
    repo: 'https://github.com/DvyanshuM9521/self_healing_microgrid',
    img: '/assets/images/microgrid.png',
    fallback: '/assets/images/microgrid.svg',
    challenge:
      'Power grid faults cascade quickly. A failure at one node propagates to dependent segments within seconds. Human operators can\'t isolate and reroute fast enough in complex topologies. The research question: can an AI agent learn a recovery policy that generalises across grid configurations it has never seen?',
    solution:
      'Modelled the power grid as a dynamic graph. A Graph Neural Network encodes node and edge state (load, health, connectivity) into a latent representation feeding a Deep RL policy network trained with PPO. The agent learns fault isolation and power rerouting as a sequential decision problem — rewarded for minimising outage duration and cascading damage.',
    arch: [
      { layer: 'Environment',    detail: 'Custom grid simulation with configurable topology and stochastic fault injection' },
      { layer: 'State encoding', detail: 'GNN aggregates local node health + neighbour context into fixed-width embedding' },
      { layer: 'Policy',         detail: 'PPO actor-critic with separate heads for fault isolation and rerouting' },
      { layer: 'Generalisation', detail: 'Domain randomisation over grid size + fault location; evaluated on held-out topologies' },
      { layer: 'Interface',      detail: 'FastAPI simulation server; real-time grid state visualisation via React frontend' },
    ],
    outcome:
      'The agent achieves autonomous fault recovery on unseen grid topologies — isolating failures and restoring supply before a human operator could be paged. Research-grade work in the same problem space as national-lab and utility R&D.',
  },
]

function ArchRow({ layer, detail, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-[110px_1fr] gap-4 py-3"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <span className="text-[11px] text-slate-600 font-medium pt-0.5">{layer}</span>
      <span className="text-[12px] text-slate-500 leading-relaxed font-mono">{detail}</span>
    </motion.div>
  )
}

function CaseEntry({ c }) {
  return (
    <div
      className="grid md:grid-cols-[260px_1fr] py-20 gap-8 md:gap-0"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Left sticky */}
      <div className="md:sticky md:top-20 h-fit pr-8">
        <FadeUp>
          <p className="text-[11px] text-slate-700 font-mono mb-1">
            {c.num} — {c.year}
          </p>
          <h3 className="text-[19px] font-bold text-white tracking-tight mb-2 leading-snug">
            {c.name}
          </h3>
          <p className="text-[13px] text-slate-500 leading-relaxed mb-7">{c.oneLiner}</p>
          <p
            className="text-[10px] font-semibold tracking-[0.12em] uppercase mb-3"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            Stack
          </p>
          <div className="flex flex-col gap-1.5 mb-6">
            {c.stack.map((s) => (
              <span key={s} className="text-[12px] text-slate-600 font-mono">
                {s}
              </span>
            ))}
          </div>
          <a
            href={c.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] text-slate-500 hover:text-white transition-colors duration-200 border border-white/[0.06] rounded-lg px-3 py-2 hover:border-white/[0.14]"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            View on GitHub
          </a>
        </FadeUp>
      </div>

      {/* Right content */}
      <div
        className="space-y-10 md:pl-10"
        style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}
      >
        {/* Screenshot */}
        <FadeUp>
          <div
            className="overflow-hidden rounded-xl"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <img
              src={c.img}
              onError={(e) => { e.currentTarget.src = c.fallback }}
              alt={`${c.name} screenshot`}
              className="w-full object-cover block"
            />
          </div>
        </FadeUp>

        {/* Challenge */}
        <FadeUp delay={0.08}>
          <p
            className="text-[10px] font-semibold tracking-[0.13em] uppercase mb-3"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            Challenge
          </p>
          <p className="text-[14px] text-slate-400 leading-[1.8]">{c.challenge}</p>
        </FadeUp>

        {/* Solution */}
        <FadeUp delay={0.13}>
          <p
            className="text-[10px] font-semibold tracking-[0.13em] uppercase mb-3"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            Solution
          </p>
          <p className="text-[14px] text-slate-400 leading-[1.8]">{c.solution}</p>
        </FadeUp>

        {/* Architecture */}
        <FadeUp delay={0.17}>
          <p
            className="text-[10px] font-semibold tracking-[0.13em] uppercase mb-1"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            Architecture
          </p>
          <div>
            {c.arch.map((row, i) => (
              <ArchRow key={row.layer} {...row} delay={0.05 * i} />
            ))}
          </div>
        </FadeUp>

        {/* Outcome */}
        <FadeUp delay={0.21}>
          <div
            className="pl-5 py-1"
            style={{ borderLeft: '2px solid rgba(255,255,255,0.08)' }}
          >
            <p
              className="text-[10px] font-semibold tracking-[0.13em] uppercase mb-3"
              style={{ color: 'rgba(255,255,255,0.22)' }}
            >
              Outcome
            </p>
            <p className="text-[14px] text-slate-400 leading-[1.8] italic">{c.outcome}</p>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 px-6 max-w-6xl mx-auto">
      <FadeUp>
        <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-600 uppercase">
          Case Studies
        </span>
        <h2
          className="font-bold text-white tracking-tight leading-[1.05] mt-4 mb-2"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)' }}
        >
          Three systems.
        </h2>
        <p className="text-slate-500 mb-4 text-[14px]">Each a different hard problem.</p>
      </FadeUp>

      {cases.map((c) => (
        <CaseEntry key={c.num} c={c} />
      ))}
    </section>
  )
}
