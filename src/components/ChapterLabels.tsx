import { useEffect, useState } from 'react';

const sections: { id: string; label: string }[] = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'leadership', label: 'LEADERSHIP' },
  { id: 'interests', label: 'INTERESTS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function ChapterLabels() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
      {sections.map((s) => (
        <div
          key={s.id}
          className="transition-opacity duration-500"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            letterSpacing: '0.3em',
            fontSize: 11,
            color: 'rgba(167,139,250,0.65)',
            opacity: active === s.id ? 1 : 0,
          }}
        >
          {s.label}
        </div>
      ))}
    </div>
  );
}
