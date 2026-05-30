import { motion } from 'framer-motion';
import {
  Plane,
  Camera,
  Bot,
  Cpu,
  Mic,
  Sparkles,
  Check,
} from 'lucide-react';

import SectionLabel from './SectionLabel';
import RevealHeading from './RevealHeading';

const viewport = { once: true, margin: '-50px' };

const cinematic = [
  {
    Icon: Plane,
    title: 'Aviation',
    desc: "I've spent more hours than I'd like to admit watching ATC recordings and reading about how airline operations actually work. There's something about how a system that moves millions of people daily manages to be as precise as it is — I find that genuinely compelling, not just \"interesting.\"",
    footer: "Could talk about this for hours, honestly",
    accent: '#fb7185',
    glow: 'rgba(251,113,133,0.18)',
  },
  {
    Icon: Camera,
    title: 'Design & Visuals',
    desc: "I notice design everywhere — why a button feels off, why a layout works without being told why, why some apps feel effortless and others feel like work. I'm not a designer by training but I've picked up enough to have strong opinions, which is probably both useful and annoying.",
    footer: "I've redesigned the same UI just for fun, multiple times",
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.18)',
  },
  {
    Icon: Bot,
    title: 'AI & Robotics',
    desc: "Less \"AI is the future\" enthusiasm and more actual curiosity about how these systems work, where they break, and what happens when software needs to interact with the messy physical world. I keep tabs on robotics research even when it has nothing to do with whatever I'm working on.",
    footer: "Reading papers for fun is a personality flaw, I know",
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.18)',
  },
];

const plain = [
  {
    Icon: Cpu,
    title: 'Systems Thinking',
    desc: "When I use something, I start wondering what's running underneath it. Not always a productive trait, but it's led me down a lot of rabbit holes that were worth it in retrospect — software architecture, telemetry pipelines, operational design.",
    footer: "The \"but how does it actually work\" person in every room",
    accent: '#8b5cf6',
  },
  {
    Icon: Mic,
    title: 'Communication',
    desc: "I care about being understood, not just technically correct. That means spending real time thinking about how to explain things — presentations, writing, even just how I phrase a message. Complex ≠ smart; clear is usually harder.",
    footer: "I rewrite things more than most people probably should",
    accent: '#22d3ee',
  },
  {
    Icon: Sparkles,
    title: 'Building Things',
    desc: "My default mode when I have free time is to start building something — a tool, an interface, an experiment that might go nowhere. A lot of it never ships. That's fine; the building is the part I actually enjoy.",
    footer: "My graveyard of half-built projects is vast and proud",
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
      className="group relative overflow-hidden rounded-[30px] border border-white/10"
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

      <div className="relative p-8 min-h-[280px] flex flex-col">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10"
          style={{
            background: `${item.accent}15`,
            boxShadow: `0 0 40px ${item.glow}`,
          }}
        >
          <item.Icon size={28} color={item.accent} />
        </div>

        <div className="mt-8">
          <h3 className="text-white text-2xl font-bold tracking-tight">
            {item.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-gray-400">
            {item.desc}
          </p>
        </div>

        <div className="mt-auto pt-8 flex items-center gap-2 text-sm text-gray-500">
          <Sparkles size={14} />
          <span>Something I genuinely enjoy exploring</span>
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
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${item.accent}20, transparent 45%)`,
        }}
      />

      <div className="relative p-7">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
          style={{
            background: `${item.accent}14`,
          }}
        >
          <item.Icon size={24} color={item.accent} />
        </div>

        <h3 className="mt-5 text-white text-xl font-semibold">
          {item.title}
        </h3>

        <p className="mt-3 text-[14px] leading-7 text-gray-400">
          {item.desc}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <Check size={14} color={item.accent} />
          <span>Part of how I think and work</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Interests() {
  return (
    <section
      id="interests"
      className="relative px-6 py-[120px] overflow-hidden"
    >
      {/* ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel>Interests</SectionLabel>

        <RevealHeading className="text-3xl sm:text-[42px] font-bold text-white max-w-3xl leading-tight">
          Things I naturally gravitate towards
        </RevealHeading>

        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-gray-400">
          A few areas I spend a lot of time exploring outside of academics and
          development — mostly driven by curiosity more than anything else.
        </p>

        {/* TOP CARDS */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {cinematic.map((item, index) => (
            <CinematicCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* BOTTOM CARDS */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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