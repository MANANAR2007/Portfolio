import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import RevealHeading from './RevealHeading';

const viewport = { once: true, margin: '-50px' };

type Entry = {
  institution: string;
  degree: string;
  year: string;
  note?: string;
  current?: boolean;
  accent: string;
  numberAccent: string;
};

const entries: Entry[] = [
  {
    institution: 'National Hill View Public School',
    degree: 'School',
    year: '',
    accent: '#9ca3af',
    numberAccent: 'rgba(156,163,175,0.70)',
  },
  {
    institution: 'RV PU College',
    degree: 'Pre-University College',
    year: '2023-2025',
    accent: '#60a5fa',
    numberAccent: 'rgba(96,165,250,0.65)',
  },
  {
    institution: 'IIT Madras',
    degree: 'BS in Data Science & Applications',
    year: 'Expected 2028',
    current: true,
    accent: '#22d3ee',
    numberAccent: 'rgba(34,211,238,0.60)',
  },
  {
    institution: 'Scaler School of Technology',
    degree: 'Computer Science',
    year: 'Expected 2029',
    note: 'Intensive CS program focused on systems and product engineering',
    current: true,
    accent: '#a78bfa',
    numberAccent: 'rgba(167,139,250,0.55)',
  },
  {
    institution: 'Woolf University',
    degree: 'MS in Computer Science',
    year: 'Expected 2029',
    note: 'Pursued alongside Scaler via credit transfer model',
    current: true,
    accent: '#f59e0b',
    numberAccent: 'rgba(245,158,11,0.50)',
  },
];

const pills = ['Hackathons', 'Workshops', 'Tech Events', 'Certifications'];

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-[100px]">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <RevealHeading className="text-3xl sm:text-[38px] font-bold text-white">
          Where I'm studying
        </RevealHeading>

        <div className="mt-12 flex flex-col gap-8">
          {entries.map((e, i) => (
            <motion.div
              key={e.institution}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="relative pl-6 sm:pl-10"
            >
              <motion.span
                aria-hidden
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.8, delay: i * 0.08 + 0.1 }}
                className="absolute -top-6 right-0 sm:-top-10 sm:right-4 font-bold leading-none pointer-events-none select-none"
                style={{
                  fontSize: 'clamp(90px, 14vw, 180px)',
                  color: e.numberAccent,
                  zIndex: 0,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </motion.span>

              <div
                className="relative z-10"
                style={{
                  borderLeft: '3px solid transparent',
                  borderImage: `linear-gradient(to bottom, ${e.accent}, ${e.accent}00) 1`,
                  paddingLeft: '1rem',
                }}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: e.accent, boxShadow: `0 0 12px ${e.accent}80` }}
                  />
                  <h3 className="text-white text-lg sm:text-xl font-semibold">
                    {e.institution}
                  </h3>
                  {e.current && (
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(52,211,153,0.12)',
                        color: '#34d399',
                        border: '1px solid rgba(52,211,153,0.35)',
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: '#34d399',
                          animation: 'pulseDot 1.6s ease-in-out infinite',
                        }}
                      />
                      Currently enrolled
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  {e.degree}
                  {e.year ? ` — ${e.year}` : ''}
                </p>
                {e.note && (
                  <p className="text-gray-500 italic text-[13px] mt-1">
                    {e.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {pills.map((p) => (
            <span
              key={p}
              className="rounded-full bg-[#1a1a1a] border border-purple/40 px-3 py-1 text-[13px] text-white"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
