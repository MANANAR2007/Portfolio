import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticlesScene({ className }: { className?: string }) {
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
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 6;

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const colors = [0x7c3aed, 0xa78bfa, 0x4c1d95];
    const geometries = [
      new THREE.IcosahedronGeometry(0.15, 0),
      new THREE.OctahedronGeometry(0.12, 0),
      new THREE.TetrahedronGeometry(0.1, 0),
    ];

    const items: {
      mesh: THREE.Mesh;
      drift: THREE.Vector3;
      rot: THREE.Vector3;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      const geom = geometries[i % geometries.length];
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        wireframe: true,
      });
      const m = new THREE.Mesh(geom, mat);
      m.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 8,
        Math.random() * 4 - 3
      );
      scene.add(m);
      items.push({
        mesh: m,
        drift: new THREE.Vector3(
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.002
        ),
        rot: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
      });
    }

    const onResize = () => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(wrap);

    let raf = 0;
    const animate = () => {
      for (const it of items) {
        it.mesh.position.add(it.drift);
        it.mesh.rotation.x += it.rot.x;
        it.mesh.rotation.y += it.rot.y;
        it.mesh.rotation.z += it.rot.z;
        if (it.mesh.position.x > 9) it.mesh.position.x = -9;
        if (it.mesh.position.x < -9) it.mesh.position.x = 9;
        if (it.mesh.position.y > 5) it.mesh.position.y = -5;
        if (it.mesh.position.y < -5) it.mesh.position.y = 5;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      items.forEach((it) => {
        (it.mesh.material as THREE.Material).dispose();
      });
      geometries.forEach((g) => g.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
