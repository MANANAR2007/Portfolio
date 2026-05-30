import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Education,
  Projects,
  Leadership,
  Interests,
  Contact,
} from './components';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ChapterLabels from './components/ChapterLabels';

function Divider() {
  return (
    <div
      aria-hidden
      className="w-full h-px"
      style={{
        background:
        'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.55) 30%, rgba(34,211,238,0.45) 70%, transparent 100%)',
}}
    />
  );
}

export default function App() {
  const heroToAboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroToAboutRef,
    offset: ['start end', 'end start'],
  });
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      <div className="bg-[#121317] text-white min-h-screen relative">
        <ChapterLabels />
        <Navbar />
        <main>
          <Hero />

          <div ref={heroToAboutRef} className="relative h-2">
            <motion.div
              className="absolute inset-x-0 top-1/2 h-px"
              style={{
                scaleX: lineScaleX,
                transformOrigin: 'left',
                background:
                  'linear-gradient(to right, rgba(124,58,237,0) 0%, #7c3aed 50%, rgba(34,211,238,0.4) 100%)',
              }}
            />
          </div>

          <About />
          <Divider />
          <Skills />
          <Divider />
          <Education />
          <Divider />
          <Projects />
          <Divider />
          <Leadership />
          <Divider />
          <Interests />
          <Divider />
          <Contact />
        </main>
      </div>
    </>
  );
}
