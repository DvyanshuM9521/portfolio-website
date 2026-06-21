import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
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

const links = [
  {
    label: 'GitHub',
    value: 'github.com/DvyanshuM9521',
    href: 'https://github.com/DvyanshuM9521',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dvyanshumishra',
    href: 'https://www.linkedin.com/in/dvyanshumishra/',
  },
  {
    label: 'Email',
    value: 'dvyanshum9521@gmail.com',
    href: 'mailto:dvyanshum9521@gmail.com',
  },
]

function LinkRow({ link, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.a
      ref={ref}
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="group flex items-center justify-between py-5 transition-colors duration-200"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0, 0, 1] }}
      whileHover={{ x: 2 }}
    >
      <div className="flex items-center gap-8">
        <span className="text-[11px] text-slate-700 w-14 uppercase tracking-wider font-medium">
          {link.label}
        </span>
        <span className="text-[14px] text-slate-400 group-hover:text-white transition-colors duration-200 font-medium">
          {link.value}
        </span>
      </div>
      <svg
        className="w-3.5 h-3.5 text-slate-700 group-hover:text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M2 12L12 2M12 2H5M12 2v7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <FadeUp>
          <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-600 uppercase">
            Contact
          </span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2
            className="font-bold text-white tracking-tight leading-[0.93] mt-5 mb-8"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            The right
            <br />
            opportunity
            <br />
            is worth a
            <br />
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>conversation.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-[15px] text-slate-400 leading-[1.75] mb-14 max-w-md">
            Open to CS and AI engineering roles, ambitious product collaborations, and
            anything genuinely hard. If you're building something worth building,
            I'd like to hear about it.
          </p>
        </FadeUp>

        <div>
          {links.map((link, i) => (
            <LinkRow key={link.label} link={link} delay={0.2 + i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}
