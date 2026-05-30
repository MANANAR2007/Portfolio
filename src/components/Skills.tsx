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
    <section id="skills" className="relative px-6 py-[100px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8 }}
        className="absolute top-6 right-2 sm:right-6 pointer-events-none z-0"
      >
        <TorusKnotScene size={200} />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionLabel>Skills</SectionLabel>
        <RevealHeading className="text-3xl sm:text-[38px] font-bold text-white">
          Tech I work with
        </RevealHeading>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-hover bg-[#111] rounded-2xl p-5"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: `3px solid ${cat.accent}`,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
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
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-3 py-1 text-[12px] text-gray-200"
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
