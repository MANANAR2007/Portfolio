import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function SectionLabel({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          let i = 0;
          const text = children;
          const tick = () => {
            i++;
            setTyped(text.slice(0, i));
            if (i < text.length) {
              setTimeout(tick, 60);
            } else {
              setDone(true);
            }
          };
          tick();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [children, done]);

  return (
    <motion.span
      ref={ref}
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="block text-[12px] uppercase tracking-widest text-purple mb-3 min-h-[1.5em]"
    >
      {typed}
      <span
        className="inline-block w-[6px] h-[10px] align-middle ml-0.5 bg-purple-light"
        style={{
          opacity: done ? 0 : 1,
          animation: done ? 'none' : 'caretBlink 0.9s steps(1) infinite',
        }}
      />
    </motion.span>
  );
}
