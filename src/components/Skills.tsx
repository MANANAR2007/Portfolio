import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Sparkles,
  PenTool,
  Monitor,
} from 'lucide-react';
import SectionLabel from './SectionLabel';
import RevealHeading from './RevealHeading';
import TorusKnotScene from '../three/TorusKnotScene';

const viewport = { once: true, margin: '-50px' };

type Category = {
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string; color?: string }>;
  items: string[];
  accent: string;
};

const categories: Category[] = [
  {
    title: 'Languages',
    Icon: Code2,
    items: ['Python', 'Java', 'JavaScript', "Typescript", 'Go'],
    accent: '#a78bfa',
  },
  {
    title: 'Frontend',
    Icon: Layout,
    items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'TypeScript'],
    accent: '#22d3ee',
  },
  {
    title: 'Backend',
    Icon: Server,
    items: ['Node.js', 'Firebase', 'MySQL'],
    accent: '#f59e0b',
  },
  {
    title: 'AI / Tools',
    Icon: Sparkles,
    items: ['Gemini API', 'GitHub Copilot', 'ChatGPT'],
    accent: '#fb7185',
  },
  {
    title: 'Tools',
    Icon: PenTool,
    items: ['Figma', 'Canva', 'DaVinci Resolve', 'VS Code'],
    accent: '#34d399',
  },
  {
    title: 'Operating Systems',
    Icon: Monitor,
    items: ['macOS', 'Windows', 'Ubuntu'],
    accent: '#9ca3af',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute right-0 top-6 z-0 hidden opacity-60 sm:block lg:right-6"
      >
        <TorusKnotScene size={180} />
      </motion.div>

      <div className="content-shell relative z-10 max-w-5xl">
        <SectionLabel>Skills</SectionLabel>
        <RevealHeading className="section-heading">
          Tech I work with
        </RevealHeading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-hover rounded-2xl bg-[#111] p-5"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: `3px solid ${cat.accent}`,
              }}
            >
              <div className="mb-3 flex items-center gap-2">
                <cat.Icon size={16} color={cat.accent} />
                <h3
                  className="text-sm font-medium"
                  style={{ color: cat.accent }}
                >
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-[#1a1a1a] px-3 py-1 text-[12px] text-gray-200"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: cat.accent }}
                    />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
