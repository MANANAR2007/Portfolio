import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { buildPlaneGroup } from './PlaneScene';

type MiniProps = { className?: string; height?: number; color?: number };

export function MiniPlaneScene({
  className,
  height = 140,
  color = 0xa78bfa,
}: MiniProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    let w = wrap.clientWidth;
    let h = wrap.clientHeight;
    renderer.setSize(w, h, false);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0.3, 4.2);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dl = new THREE.DirectionalLight(0xa78bfa, 1.3);
    dl.position.set(-3, 3, 4);
    scene.add(dl);
    const plane = buildPlaneGroup(true, color);
    plane.scale.setScalar(0.85);
    scene.add(plane);

    const ro = new ResizeObserver(() => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(wrap);

    let raf = 0;
    const start = performance.now();
    const animate = () => {
      const t = (performance.now() - start) / 1000;
      plane.rotation.y += 0.006;
      plane.rotation.x = Math.sin(t * 0.5) * 0.15;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      plane.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
          (o.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} style={{ height }}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

export function MiniCameraScene({
  className,
  height = 140,
  color = 0xf59e0b,
}: MiniProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    let w = wrap.clientWidth;
    let h = wrap.clientHeight;
    renderer.setSize(w, h, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0.4, 4.8);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const accent = new THREE.PointLight(color, 28, 12);
    accent.position.set(2, 2, 2);
    scene.add(accent);
    const back = new THREE.DirectionalLight(0xffffff, 0.4);
    back.position.set(-3, 1, 2);
    scene.add(back);

    const group = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x222227,
      metalness: 0.6,
      roughness: 0.4,
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.8,
      roughness: 0.2,
    });
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x111114,
      metalness: 0.9,
      roughness: 0.15,
    });

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 1.2, 1),
      bodyMat
    );
    group.add(body);

    const grip = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 1.35, 1.05),
      bodyMat
    );
    grip.position.set(-0.95, -0.05, 0);
    group.add(grip);

    const lens = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 0.95, 32),
      lensMat
    );
    lens.rotation.x = Math.PI / 2;
    lens.position.set(0.15, -0.05, 0.7);
    group.add(lens);

    const ring = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.55, 0.12, 32),
      accentMat
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0.15, -0.05, 1.18);
    group.add(ring);

    const top = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.18, 0.5),
      bodyMat
    );
    top.position.set(0.5, 0.7, 0);
    group.add(top);

    const shutter = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.07, 0.08, 16),
      accentMat
    );
    shutter.position.set(0.85, 0.7, 0);
    shutter.rotation.x = Math.PI / 2;
    group.add(shutter);

    scene.add(group);

    const ro = new ResizeObserver(() => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(wrap);

    let raf = 0;
    const animate = () => {
      group.rotation.y += 0.008;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      group.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
          (o.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} style={{ height }}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

export function MiniTreeScene({
  className,
  height = 140,
  color = 0x34d399,
}: MiniProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    let w = wrap.clientWidth;
    let h = wrap.clientHeight;
    renderer.setSize(w, h, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0.4, 5.2);

    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const dl = new THREE.DirectionalLight(0xa78bfa, 1);
    dl.position.set(-2, 3, 4);
    scene.add(dl);

    const group = new THREE.Group();

    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x5b3a29,
      metalness: 0.2,
      roughness: 0.8,
    });
    const leafMat = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.3,
      roughness: 0.6,
    });

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.22, 1.1, 12),
      trunkMat
    );
    trunk.position.y = -0.55;
    group.add(trunk);

    const layer1 = new THREE.Mesh(
      new THREE.ConeGeometry(1.0, 1.2, 8),
      leafMat
    );
    layer1.position.y = 0.1;
    group.add(layer1);

    const layer2 = new THREE.Mesh(
      new THREE.ConeGeometry(0.78, 1.0, 8),
      leafMat
    );
    layer2.position.y = 0.6;
    group.add(layer2);

    const layer3 = new THREE.Mesh(
      new THREE.ConeGeometry(0.55, 0.85, 8),
      leafMat
    );
    layer3.position.y = 1.05;
    group.add(layer3);

    scene.add(group);

    const ro = new ResizeObserver(() => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(wrap);

    let raf = 0;
    const animate = () => {
      group.rotation.y += 0.006;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      group.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
          (o.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} style={{ height }}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
