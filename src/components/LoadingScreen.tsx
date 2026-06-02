import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1800);
    const offTimer = setTimeout(() => setLoading(false), 2300);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(offTimer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!loading) document.body.style.overflow = '';
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9990] flex flex-col items-center justify-center bg-[#121317] px-6 text-center transition-opacity duration-400 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Loading My Universe.....</div>
      <div className="mt-6 w-40 h-[2px] bg-white/5 overflow-hidden rounded-full">
        <div
          className="h-full bg-purple"
          style={{
            transformOrigin: 'left',
            animation: 'loadFill 1.5s ease forwards',
          }}
        />
      </div>
    </div>
  );
}
