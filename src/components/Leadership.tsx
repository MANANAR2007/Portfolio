import { motion } from 'framer-motion';
import { Users, Megaphone, Star, Code2 } from 'lucide-react';
import SectionLabel from './SectionLabel';
import RevealHeading from './RevealHeading';

const viewport = { once: true, margin: '-50px' };

const items = [
  {
    Icon: Megaphone,
    title: 'PR & Marketing Head',
    org: 'Dubai Global Youth Summit',
    desc: 'Managed press, communications, and outreach for an international youth summit in Dubai.',
    accent: '#22d3ee',
  },
  {
    Icon: Star,
    title: 'Creatives Team',
    org: 'Orator Society',
    desc: 'Active member of a competitive public speaking and debate club.',
    accent: '#fb7185',
  },
  {
    Icon: Users,
    title: 'Events Team',
    org: 'Ascent Tech Fest',
    desc: 'Led end-to-end planning and execution of robotics events at a university-level tech fest.',
    accent: '#f59e0b',
  },
  {
    Icon: Code2,
    title: 'Freelance Developer',
    org: 'Independent',
    desc: 'Built production websites for real clients. First project: Khushi Containers.',
    accent: '#34d399',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-shell">
      <div className="content-shell max-w-5xl">
        <SectionLabel>Leadership</SectionLabel>
        <RevealHeading className="section-heading">
          Beyond the keyboard
        </RevealHeading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover h-full rounded-2xl bg-[#111] p-5"
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                borderTop: `2px solid ${item.accent}55`,
              }}
            >
              <item.Icon size={24} color={item.accent} className="mb-3" />
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p
                className="text-[13px] mt-1 mb-2"
                style={{ color: item.accent }}
              >
                {item.org}
              </p>
              <p className="text-[13px] leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
