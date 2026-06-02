import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Camera, Bot, Mic, Palette } from 'lucide-react';
import SectionLabel from './SectionLabel';
import RevealHeading from './RevealHeading';
import ParticlesScene from '../three/ParticlesScene';

const viewport = { once: true, margin: '-50px' };

const interests = [
  { label: 'Aviation', Icon: Plane, color: '#fb7185' },
  { label: 'Photography', Icon: Camera, color: '#f59e0b' },
  { label: 'Software', Icon: Bot, color: '#a78bfa' },
  { label: 'Public Speaking', Icon: Mic, color: '#22d3ee' },
  { label: 'Design', Icon: Palette, color: '#34d399' },
];

const filmstrip = [
  {
    src: '/images/1.jpg',
    alt: '',
  },
  {
    src: '/images/2.jpg',
    alt: '',
  },
  {
    src: '/images/3.HEIC',
    alt: '',
  },
];

const facts = [
  'Avgeek',
  'Photographer',
  '2 Degrees Simultaneously',
  'First Client at 17',
  'Dubai Global Youth Summit',
  'Builder',
  'IIT Madras',
  'Open to Collabs',
];

const paragraphs: React.ReactNode[] = [
  <>
    I didn't get into tech through a plan. It started from spending too much time poking
    at things that{' '}
    <span className="text-white font-medium">didn't concern me</span> — how software
    worked, why certain systems behaved the way they did, what happened if you changed the
    wrong variable. That kind of curiosity either gets you in trouble or turns into
    something useful. For me, eventually it turned into the latter.
  </>,
  <>
    That led to coding, then to design, then to actually shipping things. AI tools,
    dashboards, healthcare projects — I built a lot of stuff that{' '}
    <span className="text-white font-medium">
      taught me more through breaking than through working.
    </span>{' '}
    My first client came before I really knew what I was doing. I figured it out anyway.
    That's still pretty much the method.
  </>,
  <>
    Outside of building, I'm deep into aviation, robotics, photography, and design. Not as
    hobbies to list — they genuinely{' '}
    <span className="text-white font-medium">change how I think</span> about software.
    When you care about how a cockpit is laid out, you think differently about information
    hierarchy. One thing bleeds into another.
  </>,
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bg = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ['#181a20', '#1f1b2e', '#16212b', '#181a20']
  );

  const particleY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const tickerItems = [...facts, ...facts, ...facts];

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="section-shell relative overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      {/* Particles background */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
        style={{ opacity: 0.4, y: particleY }}
      >
        <ParticlesScene className="w-full h-full" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <SectionLabel>About</SectionLabel>

        <RevealHeading className="section-heading">
          A curious builder, still figuring things out.
        </RevealHeading>

        {/* Body paragraphs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12, delayChildren: 0.08 },
            },
          }}
          className="mt-7 flex flex-col gap-5 sm:mt-8 sm:gap-6"
        >
          {paragraphs.map((content, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-base leading-8 text-gray-400 sm:text-[17px]"
            >
              {content}
            </motion.p>
          ))}
        </motion.div>

        {/* Filmstrip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid h-[120px] grid-cols-3 gap-2 sm:h-[160px] sm:gap-3 md:h-[220px]"
        >
          {filmstrip.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-xl bg-[#111] sm:rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-500 ease-out"
                style={{ filter: 'grayscale(40%) brightness(0.65)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.filter = 'grayscale(0%) brightness(0.85)';
                  el.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.filter = 'grayscale(40%) brightness(0.65)';
                  el.style.transform = 'scale(1)';
                }}
              />
            </div>
          ))}
        </motion.div>

        <p className="mt-3 text-center text-[13px] italic text-gray-500">
          A few photos that I've taken
        </p>

        {/* Quote */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-10 pl-7 sm:pl-8"
        >
          <span
            aria-hidden
            className="absolute left-0 top-0 font-serif leading-none text-purple-400"
            style={{ fontSize: 80, opacity: 0.4 }}
          >
            "
          </span>
          <blockquote className="max-w-lg text-lg italic leading-snug text-white sm:text-xl">
            A strong believer of 
            "God has a way of making things work out when they're meant to."
          </blockquote>
        </motion.figure>

        {/* Interest tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {interests.map(({ label, Icon, color }) => (
            <span
              key={label}
              className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-[#1a1a1a] px-3 py-1 text-[13px] text-white"
              style={{ border: `1px solid ${color}55` }}
            >
              <Icon size={13} color={color} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 mt-14 w-full overflow-hidden sm:mt-16">
        <div
          className="flex gap-6 whitespace-nowrap sm:gap-8"
          style={{ animation: 'tickerScroll 36s linear infinite' }}
        >
          {tickerItems.map((f, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 text-[11px] uppercase tracking-widest text-gray-400 sm:gap-8 sm:text-[13px]"
            >
              {f}
              <span className="text-purple-300 opacity-60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
