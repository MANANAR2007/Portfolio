import { motion } from 'framer-motion';
import {
  Plane,
  Camera,
  Palette,
  Users,
  Globe,
  Mic
} from 'lucide-react';

import SectionLabel from './SectionLabel';
import RevealHeading from './RevealHeading';

const viewport = { once: true, margin: '-50px' };

const cinematic = [
  {
    Icon: Plane,
    title: 'Aviation',
    desc: "I've spent more hours than I'd like to admit watching ATC recordings, following airline operations, and reading about aircraft. There's something fascinating about the precision and coordination behind an industry that moves millions of people every day.",
    footer: "Could probably identify an aircraft before you finish asking",
    accent: '#fb7185',
    glow: 'rgba(251,113,133,0.18)',
  },
  {
    Icon: Camera,
    title: 'Photography',
    desc: "Photography makes me pay attention to details I would otherwise miss. Whether it's airports, cityscapes, or random moments, I enjoy finding interesting perspectives and stories through a lens.",
    footer: "Most trips somehow turn into photo walks",
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.18)',
  },
  {
    Icon: Mic,
    title: 'Public Speaking',
    desc: "I've always enjoyed being on stage, presenting ideas, and having conversations that make people think. Public speaking taught me confidence, but more importantly, it taught me how to communicate clearly.",
    footer: "Still get nervous. Just better at hiding it now",
    accent: '#22d3ee',
    glow: 'rgba(34,211,238,0.18)',
  },
];

const plain = [
  {
    Icon: Palette,
    title: 'Graphic Design',
    desc: "I enjoy creating visuals, experimenting with layouts, and understanding why certain designs feel right. It's probably why I spend way too much time tweaking interfaces.",
    footer: "The alignment definitely matters",
    accent: '#8b5cf6',
  },
  {
    Icon: Users,
    title: 'Leadership & Events',
    desc: "From school events to international summits, I've always enjoyed bringing people together, organizing things, and making sure ideas actually turn into reality.",
    footer: "Planning is fun until the event starts",
    accent: '#34d399',
  },
  {
    Icon: Globe,
    title: 'Exploring New Things',
    desc: "Whether it's a new technology, a random topic, or a completely different field, I enjoy diving into unfamiliar territory. Curiosity is probably the one interest that connects everything else.",
    footer: "The rabbit holes never really end",
    accent: '#facc15',
  },
];

function CinematicCard({
  item,
  index,
}: {
  item: (typeof cinematic)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 sm:rounded-[30px]"
      style={{
        background: `
          radial-gradient(circle at top right, ${item.glow}, transparent 42%),
          linear-gradient(145deg, #0f1117 0%, #090b10 100%)
        `,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${item.glow}, transparent 60%)`,
        }}
      />

      <div className="relative flex min-h-[250px] flex-col p-6 sm:min-h-[280px] sm:p-8">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10"
          style={{
            background: `${item.accent}15`,
            boxShadow: `0 0 40px ${item.glow}`,
          }}
        >
          <item.Icon size={28} color={item.accent} />
        </div>

        <div className="mt-7 sm:mt-8">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {item.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-gray-400">
            {item.desc}
          </p>
        </div>

        <div className="mt-auto pt-8 flex items-center gap-2 text-sm text-gray-500">

        </div>
      </div>
    </motion.div>
  );
}

function MinimalCard({
  item,
  index,
}: {
  item: (typeof plain)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] sm:rounded-[28px]"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${item.accent}20, transparent 45%)`,
        }}
      />

      <div className="relative h-full p-6 sm:p-7">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
          style={{
            background: `${item.accent}14`,
          }}
        >
          <item.Icon size={24} color={item.accent} />
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          {item.title}
        </h3>

        <p className="mt-3 text-[14px] leading-7 text-gray-400">
          {item.desc}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          
        </div>
      </div>
    </motion.div>
  );
}

export default function Interests() {
  return (
    <section id="interests" className="section-shell relative overflow-hidden">
      {/* ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[240px] w-[240px] bg-purple-500/10 blur-[90px] sm:left-1/4 sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[240px] w-[240px] bg-cyan-500/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />
      </div>

      <div className="content-shell relative">
        <SectionLabel>Interests</SectionLabel>

        <RevealHeading className="section-heading max-w-3xl">
          Things I naturally gravitate towards
        </RevealHeading>

        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-gray-400">
          A few areas I spend a lot of time exploring outside of academics and
          development — mostly driven by curiosity more than anything else.
        </p>

        {/* TOP CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:mt-14 xl:grid-cols-3">
          {cinematic.map((item, index) => (
            <CinematicCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* BOTTOM CARDS */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plain.map((item, index) => (
            <MinimalCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
