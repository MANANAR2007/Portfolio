import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import {
  TorusRingScene,
  IcoGemScene,
} from '../three/HeroAccents';

const HERO_PHOTO = 'public/images/profile.PNG';

const subtitle =
  "A CS student who enjoys building things around AI, systems, and real-world ideas. Currently exploring software engineering through projects, design, and a lot of curiosity.";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

function useTypewriter(text: string, delayMs = 28, startDelay = 700) {
  const [out, setOut] = useState('');
  useEffect(() => {
    let timer = 0;
    let i = 0;
    const tick = () => {
      i++;
      setOut(text.slice(0, i));
      if (i < text.length) {
        timer = window.setTimeout(tick, delayMs);
      }
    };
    const startTimer = window.setTimeout(tick, startDelay);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, [text, delayMs, startDelay]);
  return out;
}

export default function Hero() {
  const typed = useTypewriter(subtitle);
  const [showArrow, setShowArrow] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const heroBg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      '#181a20',
      '#1d1b2a',
      '#14161b',
    ]
  );

  useEffect(() => {
    const onScroll = () => setShowArrow(window.scrollY < 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center px-6 pt-24 pb-20"
      style={{ backgroundColor: heroBg }}
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 30%, #0d0814 0%, #0a0a0a 60%, #0a0a0a 100%)',
          animation: 'heroGradient 12s ease infinite',
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <div className="flex flex-col gap-6">
          <motion.span
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex self-start text-[12px] uppercase tracking-wider text-purple-light border border-purple/60 rounded-full px-3 py-1"
          >
            Student Developer
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-[38px] sm:text-5xl lg:text-[56px] leading-[1.15] font-bold text-white"
          >
            Heyy, I'm Manan<span className="text-purple">.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-gray-400 text-[17px] leading-relaxed max-w-md min-h-[5.5rem]"
          >
            {typed}
            {typed.length < subtitle.length && (
              <span
                className="inline-block w-[2px] h-[1em] align-middle ml-0.5 bg-purple-light"
                style={{ animation: 'caretBlink 0.9s steps(1) infinite' }}
              />
            )}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="btn-glow bg-purple hover:bg-purple-light transition-colors rounded-full px-6 py-3 text-sm font-medium text-white"
            >
              View Projects
            </a>
            <a
              href="#"
              /* TODO: replace with real resume link */
              className="btn-glow border border-white/20 hover:border-white/50 text-white rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="btn-glow border border-white/20 hover:border-white/50 text-white rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex items-center gap-4 mt-2 text-gray-400"
          >
            {/* TODO: replace with real info */}
            <a
              href="https://github.com/MANANAR2007"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manan-raythatha-2383b1233"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:mananar2007@gmail.com"
              aria-label="Email"
              className="hover:text-emerald-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          style={{ y: photoY }}
          className="relative flex items-center justify-center"
        >
          <div
            className="relative"
            style={{
              width: 280,
              height: 380,
              boxShadow: '0 0 80px rgba(124,58,237,0.2)',
              borderRadius: 24,
            }}
          >
            <div className="relative w-[340px] md:w-[420px] h-[460px] md:h-[560px] -translate-x-6 -translate-y-12">
              <img
                src={HERO_PHOTO}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  borderRadius: 24,
                  filter: 'blur(40px)',
                  opacity: 0.25,
                  transform: 'scale(1.25)',
                  zIndex: -1,
                }}
              />

              <img
                src={HERO_PHOTO}
                alt="Manan"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.1)',
                  objectPosition: 'top',
                }}
              />
            </div>

            <div
              className="absolute"
              style={{ top: -144, right: -214 }}
              aria-hidden
            >
              <TorusRingScene size={200} />
            </div>

            <div
              className="absolute"
              style={{ bottom: -200, left: -88 }}
              aria-hidden
            >
              <IcoGemScene size={150} />
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className={`pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${showArrow ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <span className="text-[11px] uppercase tracking-widest text-gray-500 mb-2">
          Scroll
        </span>
        <ChevronDown
          size={20}
          className="text-purple-light"
          style={{ animation: 'bounceDown 2s ease infinite' }}
        />
      </div>
    </motion.section>
  );
}
