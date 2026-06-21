import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.25 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0, 0, 1] } },
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 75% 55% at 50% 0%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 55% at 50% 0%, black 30%, transparent 100%)',
        }}
      />

      {/* Orb left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: '-18%',
          left: '5%',
          background:
            'radial-gradient(circle, rgba(56,78,200,0.14) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 550,
          height: 550,
          top: '5%',
          right: '5%',
          background:
            'radial-gradient(circle, rgba(90,30,200,0.10) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: 'linear-gradient(to bottom, transparent, #030712)',
        }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 overflow-hidden">
      <GridBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto w-full"
      >
        {/* Status badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] text-[11px] text-slate-400 mb-10 tracking-wide"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-extrabold text-white leading-[0.9] tracking-[-0.045em] mb-7"
          style={{ fontSize: 'clamp(4rem, 11vw, 9rem)' }}
        >
          Divyanshu
          <br />
          <span style={{ color: 'rgba(255,255,255,0.28)' }}>Mishra</span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-slate-400 font-medium tracking-tight mb-5"
        >
          CS and AI Engineer &nbsp;·&nbsp; Software Developer &nbsp;·&nbsp; Full Stack
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-[15px] text-slate-500 max-w-[480px] mx-auto leading-[1.75] mb-11"
        >
          I build intelligent systems that operate at scale — from contract
          intelligence to autonomous grid recovery to enterprise security
          operations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-xl bg-white text-[#030712] text-sm font-semibold hover:bg-slate-100 transition-all duration-200 hover:-translate-y-px active:translate-y-0"
          >
            View Projects
          </a>
          <a
            href="assets/Divyanshu_Mishra_Resume.pdf"
            download
            className="px-6 py-2.5 rounded-xl border border-white/10 text-sm text-slate-300 font-medium hover:border-white/20 hover:text-white transition-all duration-200 hover:-translate-y-px"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-xl border border-white/10 text-sm text-slate-300 font-medium hover:border-white/20 hover:text-white transition-all duration-200 hover:-translate-y-px"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 2v10M3 8l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <span className="text-[10px] tracking-widest uppercase">scroll</span>
      </motion.div>
    </section>
  )
}
