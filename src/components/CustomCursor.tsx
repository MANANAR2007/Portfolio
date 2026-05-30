import { useEffect, useRef } from 'react';

const HOVER_SELECTOR =
  'a, button, [role="button"], [data-cursor="hover"], .card-hover, input, textarea, select, label';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.documentElement.classList.add('cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const apply = () => {
      const { x, y } = posRef.current;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      const scale = hoverRef.current ? 2.8 : 1;
      ring.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    };

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      show();
      apply();
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest?.(HOVER_SELECTOR)) {
        hoverRef.current = true;
        document.body.classList.add('cursor-hover');
        apply();
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest?.(HOVER_SELECTOR)) {
        hoverRef.current = false;
        document.body.classList.remove('cursor-hover');
        apply();
      }
    };

    const onLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      shown = false;
    };
    const onEnter = () => {
      // re-show on mouse re-entering the document
      shown = false;
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.documentElement.classList.remove('cursor-active');
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#ffffff',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 150ms ease, transform 80ms ease',
          willChange: 'transform',
        }}
        className="cursor-dot"
      />
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 38,
          height: 38,
          margin: -15,
          borderRadius: '50%',
          border: '1.5px solid rgba(167,139,250,0.7)',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition:
            'opacity 150ms ease, transform 150ms ease, background 200ms ease, border-color 200ms ease',
          willChange: 'transform',
        }}
        className="cursor-ring"
      />
    </>
  );
}
