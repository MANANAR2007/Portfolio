import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import SphereScene from '../three/SphereScene';

const viewport = { once: true, margin: '-50px' };

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-45 sm:opacity-70">
        <SphereScene size={420} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl"
        >
          Let's build{' '}
          <span
            style={{
              backgroundImage:
                'linear-gradient(90deg, #7c3aed 0%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              paddingBottom: '0.1em',
            }}
          >
            something.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-gray-400"
        >
          I'm open to collaborations, projects, or just a good conversation
          about tech and ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          {/* TODO: add real email */}
          <a
            href="mailto:mananar2007@gmail.com"
            className="btn-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-purple px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-purple-light"
          >
            <Mail size={16} /> Email Me
          </a>
          {/* TODO: replace with real GitHub */}
          <a
            href="https://github.com/MANANAR2007"
            target="_blank"
            rel="noreferrer"
            className="btn-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-white/50"
          >
            GitHub <ExternalLink size={14} />
          </a>
          {/* TODO: replace with real LinkedIn */}
          <a
            href="https://www.linkedin.com/in/manan-raythatha-2383b1233"
            target="_blank"
            rel="noreferrer"
            className="btn-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-white/50"
          >
            LinkedIn <ExternalLink size={14} />
          </a>
        </motion.div>

        <p className="mt-14 text-[13px] text-gray-500 sm:mt-16">
          Built by Manan Raythatha · 2025
        </p>
      </div>
    </section>
  );
}
