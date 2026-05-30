import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SphereScene({
  size = 500,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6;

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const geom = new THREE.SphereGeometry(2, 32, 32);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x4c1d95,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);

    let raf = 0;
    const start = performance.now();
    const animate = () => {
      const t = (performance.now() - start) / 1000;
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.003;
      const s = Math.sin(t * 0.8) * 0.05 + 1;
      mesh.scale.setScalar(s);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      geom.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, filter: 'blur(1px)' }}
    />
  );
}
