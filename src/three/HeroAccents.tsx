import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = { size?: number; className?: string };

function setup(canvas: HTMLCanvasElement, size: number) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(size, size, false);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  return { renderer, scene, camera };
}

export function TorusRingScene({ size = 100, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { renderer, scene, camera } = setup(canvas, size);
    camera.position.z = 4.2;

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const light = new THREE.PointLight(0xffffff, 22, 12);
    light.position.set(2, 3, 3);
    scene.add(light);
    const back = new THREE.DirectionalLight(0x22d3ee, 0.6);
    back.position.set(-2, -1, 1);
    scene.add(back);

    const geom = new THREE.TorusGeometry(1, 0.25, 16, 60);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      metalness: 0.9,
      roughness: 0.1,
    });
    const mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);

    let raf = 0;
    const start = performance.now();
    const animate = () => {
      const t = (performance.now() - start) / 1000;
      mesh.rotation.x += 0.009;
      mesh.rotation.y += 0.012;
      mesh.position.y = Math.sin(t * 1.4) * 0.18;
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
      style={{ width: size, height: size, pointerEvents: 'none' }}
    />
  );
}

export function IcoGemScene({ size = 90, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { renderer, scene, camera } = setup(canvas, size);

    camera.position.z = 3.8;

    scene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const p1 = new THREE.PointLight(0xffd700, 30, 12);
    p1.position.set(2, 3, 3);
    scene.add(p1);

    const p2 = new THREE.PointLight(0xffffff, 12, 12);
    p2.position.set(-2, -2, 2);
    scene.add(p2);

    const geom = new THREE.IcosahedronGeometry(1, 0);

    const mat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.9,
      roughness: 0.15,
      envMapIntensity: 1.6,
    });

    const mesh = new THREE.Mesh(geom, mat);

    scene.add(mesh);

    let raf = 0;

    const start = performance.now();

    const animate = () => {
      const t = (performance.now() - start) / 1000;

      mesh.rotation.y += 0.012;
      mesh.rotation.x = Math.sin(t * 0.7) * 0.25;

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
      style={{
        width: size,
        height: size,
        pointerEvents: 'none',
      }}
    />
  );
}

export function CubeClusterScene({ size = 80, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { renderer, scene, camera } = setup(canvas, size);
    camera.position.z = 3.4;

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    const mat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
    });
    const g1 = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const g2 = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const g3 = new THREE.BoxGeometry(0.4, 0.4, 0.4);

    const c1 = new THREE.Mesh(g1, mat);
    c1.position.set(-0.45, 0.25, 0);
    const c2 = new THREE.Mesh(g2, mat);
    c2.position.set(0.4, -0.15, 0.2);
    c2.rotation.set(0.3, 0.4, 0);
    const c3 = new THREE.Mesh(g3, mat);
    c3.position.set(0.05, 0.5, -0.2);
    c3.rotation.set(0.2, 0.6, 0.3);
    scene.add(c1, c2, c3);

    let raf = 0;
    const animate = () => {
      c1.rotation.x += 0.012;
      c1.rotation.y += 0.018;
      c2.rotation.x += 0.02;
      c2.rotation.z += 0.015;
      c3.rotation.y += 0.009;
      c3.rotation.x += 0.022;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      g1.dispose();
      g2.dispose();
      g3.dispose();
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
      style={{ width: size, height: size, pointerEvents: 'none' }}
    />
  );
}
