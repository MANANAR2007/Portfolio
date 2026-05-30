import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';
import { GithubIcon } from './BrandIcons';

type Metric = {
  label: string;
  value: string;
};

type PreviewCard = {
  label: string;
  value: string;
};

type Project = {
  name: string;
  subtitle: string;
  stack: string[];
  description: string;
  features: string[];
  accent: string;
  accentSoft: string;
  accentGlow: string;
  githubUrl: string;
  demoUrl: string;
  metrics: Metric[];
  previewCards: PreviewCard[];
  previewTitle: string;
  previewSubtitle: string;
};

const PROJECTS: Project[] = [
  {
    name: 'Astra',
    subtitle: 'AI study operating system',
    stack: ['React', 'TypeScript', 'Gemini API', 'Firebase'],
    description:
      'Astra turns raw notes into structured learning workflows: summaries, quizzes, flashcards, and a dashboard that helps students know what to study next.',
    features: [
      'Upload notes as PDFs or images',
      'Extract text with OCR',
      'Generate summaries and quizzes',
      'Track learning progress',
    ],
    accent: '#8b5cf6',
    accentSoft: 'rgba(139,92,246,0.16)',
    accentGlow: 'rgba(139,92,246,0.38)',
    githubUrl: 'https://github.com/MANANAR2007/Astra',
    demoUrl: 'https://astra-three-lemon.vercel.app/',
    previewTitle: 'Study cockpit',
    previewSubtitle: 'A note becomes a learning plan in one pass.',
    metrics: [
      { label: 'Modes', value: '4' },
      { label: 'Input', value: 'PDF + image' },
      { label: 'Focus', value: 'Adaptive' },
    ],
    previewCards: [
      { label: 'Summary confidence', value: '92%' },
      { label: 'Quiz questions', value: '18' },
      { label: 'Flashcards ready', value: '42' },
    ],
  },
  {
    name: 'MedGuardian',
    subtitle: 'Care coordination for families',
    stack: ['React', 'Firebase', 'AI'],
    description:
      'A dual-dashboard health companion for patients and caregivers, designed around medication routines, prescription capture, and understandable AI insights.',
    features: [
      'Caregiver and patient views',
      'Medication adherence tracking',
      'Prescription scanning flow',
      'Health insight summaries',
    ],
    accent: '#22d3ee',
    accentSoft: 'rgba(34,211,238,0.15)',
    accentGlow: 'rgba(34,211,238,0.32)',
    githubUrl: 'https://github.com/MANANAR2007/medguardian',
    demoUrl: 'https://med-guardian-rho.vercel.app/',
    previewTitle: 'Care timeline',
    previewSubtitle: 'Medication context stays visible without overwhelming the user.',
    metrics: [
      { label: 'Dashboards', value: '2' },
      { label: 'Alerts', value: 'Live' },
      { label: 'Scanning', value: 'OCR' },
    ],
    previewCards: [
      { label: 'Morning dose', value: 'Done' },
      { label: 'Refill risk', value: '3 days' },
      { label: 'Caregiver note', value: 'Synced' },
    ],
  },
  {
    name: 'TrackerX',
    subtitle: 'Application pipeline command center',
    stack: ['React', 'Node.js', 'MySQL'],
    description:
      'A focused job-search system that tracks every application, keeps interviews from slipping, and imports opportunities into a clean operating view.',
    features: [
      'Application status pipeline',
      'AI-assisted opportunity import',
      'Interview reminders',
      'Progress dashboard',
    ],
    accent: '#f59e0b',
    accentSoft: 'rgba(245,158,11,0.14)',
    accentGlow: 'rgba(245,158,11,0.28)',
    githubUrl: 'https://github.com/MANANAR2007/TrackerX',
    demoUrl: 'https://tracker-x-zeta.vercel.app',
    previewTitle: 'Pipeline board',
    previewSubtitle: 'Every opportunity moves through a simple, inspectable flow.',
    metrics: [
      { label: 'Stages', value: '6' },
      { label: 'Source', value: 'AI import' },
      { label: 'Storage', value: 'MySQL' },
    ],
    previewCards: [
      { label: 'Applied', value: '24' },
      { label: 'Interviewing', value: '5' },
      { label: 'Follow-ups', value: '7' },
    ],
  },
  {
    name: 'Live News AI',
    subtitle: 'Explainable news intelligence',
    stack: ['JavaScript', 'News API', 'Gemini API'],
    description:
      'A real-time news reader that compresses noisy headlines into useful summaries, then explains complex stories in simpler language when needed.',
    features: [
      'Live category feeds',
      'AI summarization',
      'Explain-like-I-am-5 mode',
      'Fast filtering experience',
    ],
    accent: '#fb7185',
    accentSoft: 'rgba(251,113,133,0.15)',
    accentGlow: 'rgba(251,113,133,0.28)',
    githubUrl: 'https://github.com/MANANAR2007/LiveNewsAI',
    demoUrl: 'https://live-news-ai-three.vercel.app/',
    previewTitle: 'Signal feed',
    previewSubtitle: 'Headlines become context instead of clutter.',
    metrics: [
      { label: 'Feeds', value: 'Live' },
      { label: 'Modes', value: '2' },
      { label: 'Filter', value: 'Instant' },
    ],
    previewCards: [
      { label: 'Top stories', value: '36' },
      { label: 'Summaries', value: 'Ready' },
      { label: 'Reading time', value: '-68%' },
    ],
  },
  {
    name: 'Khushi Containers',
    subtitle: 'Client business presence',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A responsive business site shipped for a real client, focused on trust, product clarity, and making contact frictionless on mobile and desktop.',
    features: [
      'Responsive landing page',
      'Business inquiry flow',
      'Product-focused structure',
      'Production client delivery',
    ],
    accent: '#34d399',
    accentSoft: 'rgba(52,211,153,0.14)',
    accentGlow: 'rgba(52,211,153,0.26)',
    githubUrl: 'https://github.com/MANANAR2007/khushi-website',
    demoUrl: 'https://www.khushicontainers.com/',
    previewTitle: 'Client storefront',
    previewSubtitle: 'A lightweight presence built to convert practical inquiries.',
    metrics: [
      { label: 'Client', value: 'Paid' },
      { label: 'Device', value: 'Responsive' },
      { label: 'Stack', value: 'Static' },
    ],
    previewCards: [
      { label: 'Inquiry path', value: 'Clear' },
      { label: 'Load model', value: 'Static' },
      { label: 'Delivery', value: 'Shipped' },
    ],
  },
];

function ActionButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target={href === '#' ? undefined : '_blank'}
      rel={href === '#' ? undefined : 'noreferrer'}
      className={`btn-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${primary
        ? 'bg-white text-[#121317] hover:bg-gray-200'
        : 'border border-white/15 text-white hover:border-white/40 hover:bg-white/5'
        }`}
    >
      {children}
    </a>
  );
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  return (
    <section
      className="sticky top-0 h-screen overflow-hidden bg-[#121317]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.55 }}
        transition={{ duration: 0.6 }}
        style={{
          background: `radial-gradient(circle at 72% 42%, ${project.accentGlow}, transparent 34%), radial-gradient(circle at 12% 78%, rgba(255,255,255,0.045), transparent 28%)`,
        }}
      />
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <motion.div
          className="h-full grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 xl:gap-16 items-center"
          initial={{ opacity: 0, y: 36, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.58 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span
                className="h-px w-10"
                style={{ background: project.accent }}
              />
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span className="text-gray-600">/</span>
              <span>{project.subtitle}</span>
            </div>

            <h2 className="mt-6 text-5xl xl:text-7xl font-bold leading-none tracking-tight text-white">
              {project.name}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1.5 text-[12px] font-medium text-white/90"
                  style={{
                    borderColor: `${project.accent}55`,
                    background: project.accentSoft,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full"
                    style={{
                      background: project.accentSoft,
                      color: project.accent,
                    }}
                  >
                    <Check size={14} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <ActionButton href={project.githubUrl}>
                <GithubIcon size={16} /> GitHub
              </ActionButton>
              <ActionButton href={project.demoUrl} primary>
                Live Demo <ArrowUpRight size={16} />
              </ActionButton>
            </div>
          </div>

          <div
            className="relative h-full min-h-[460px] rounded-[32px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_45px_120px_rgba(0,0,0,0.46)]"
            style={{ boxShadow: `0 45px 120px rgba(0,0,0,0.46), 0 0 90px ${project.accentGlow}` }}
          >
            <div className="absolute -inset-px rounded-[32px] opacity-70 pointer-events-none" style={{ background: `linear-gradient(135deg, ${project.accent}55, transparent 36%, rgba(255,255,255,0.12))` }} />
            <div className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-[#08090d]">
              <iframe
                title={`${project.name} live demo`}
                src={project.demoUrl}
                className="h-full w-full"
                loading="lazy"
                allow="fullscreen; clipboard-read; clipboard-write"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MobileProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div
        className="h-56 border-b border-white/10"
        style={{
          background: `radial-gradient(circle at 70% 30%, ${project.accentGlow}, transparent 38%), #0b0c10`,
        }}
      >
        <iframe
          title={`${project.name} live demo`}
          src={project.demoUrl}
          className="h-full w-full"
          loading="lazy"
          allow="fullscreen; clipboard-read; clipboard-write"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{project.subtitle}</span>
        </div>
        <h3 className="mt-4 text-3xl font-bold text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-gray-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border px-3 py-1 text-[11px] text-white/85"
              style={{
                borderColor: `${project.accent}55`,
                background: project.accentSoft,
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ActionButton href={project.githubUrl}>
            <GithubIcon size={15} /> GitHub
          </ActionButton>
          <ActionButton href={project.demoUrl} primary>
            Live <ExternalLink size={15} />
          </ActionButton>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#121317]">
      <div className="hidden lg:block">
        {PROJECTS.map((project, index) => (
          <ProjectPanel key={project.name} project={project} index={index} />
        ))}
      </div>

      <div className="lg:hidden px-4 py-20">
        <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
          Projects
        </p>
        <h2 className="text-4xl font-bold text-white mb-10">
          Things I've built
        </h2>
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, index) => (
            <MobileProject key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
