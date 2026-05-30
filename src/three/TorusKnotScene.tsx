import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TorusKnotScene({
  size = 200,
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
    camera.position.z = 4.2;

    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const pl = new THREE.PointLight(0xa78bfa, 35, 12);
    pl.position.set(0, 3, 3);
    scene.add(pl);
    const pl2 = new THREE.PointLight(0x7c3aed, 18, 12);
    pl2.position.set(-2, -2, 2);
    scene.add(pl2);

    const geom = new THREE.TorusKnotGeometry(1, 0.3, 128, 16);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      metalness: 0.8,
      roughness: 0.15,
    });
    const mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);

    let raf = 0;
    const animate = () => {
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.007;
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
      style={{ width: size, height: size }}
    />
  );
}
