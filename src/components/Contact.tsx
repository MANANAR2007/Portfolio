import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import SphereScene from '../three/SphereScene';

const viewport = { once: true, margin: '-50px' };

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-32"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <SphereScene size={520} />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
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
          className="mt-6 text-gray-400 text-base max-w-lg mx-auto leading-relaxed"
        >
          I'm open to collaborations, projects, or just a good conversation
          about tech and ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {/* TODO: add real email */}
          <a
            href="mailto:mananar2007@gmail.com"
            className="btn-glow inline-flex items-center gap-2 bg-purple hover:bg-purple-light transition-colors text-white rounded-full px-8 py-4 text-sm font-medium"
          >
            <Mail size={16} /> Email Me
          </a>
          {/* TODO: replace with real GitHub */}
          <a
            href="https://github.com/MANANAR2007"
            target="_blank"
            rel="noreferrer"
            className="btn-glow inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white rounded-full px-8 py-4 text-sm font-medium transition-colors"
          >
            GitHub <ExternalLink size={14} />
          </a>
          {/* TODO: replace with real LinkedIn */}
          <a
            href="https://www.linkedin.com/in/manan-raythatha-2383b1233"
            target="_blank"
            rel="noreferrer"
            className="btn-glow inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white rounded-full px-8 py-4 text-sm font-medium transition-colors"
          >
            LinkedIn <ExternalLink size={14} />
          </a>
        </motion.div>

        <p className="mt-16 text-gray-500 text-[13px]">
          Built by Manan Raythatha · 2025
        </p>
      </div>
    </section>
  );
}
