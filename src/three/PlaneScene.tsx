import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Props = {
  className?: string;
  size?: number;
  interactive?: boolean;
  wireframe?: boolean;
  scale?: number;
};

export function buildPlaneGroup(wireframe = false, color = 0xa78bfa) {
  const group = new THREE.Group();
  const material = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.6,
    roughness: 0.3,
    wireframe,
  });

  const fuselage = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.12, 2.2, 18),
    material
  );
  fuselage.rotation.z = Math.PI / 2;
  group.add(fuselage);

  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(0.18, 0.4, 18),
    material
  );
  nose.rotation.z = -Math.PI / 2;
  nose.position.x = 1.3;
  group.add(nose);

  const wings = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.05, 2.6),
    material
  );
  wings.position.y = 0;
  group.add(wings);

  const vStab = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.4, 0.05),
    material
  );
  vStab.position.set(-0.95, 0.22, 0);
  group.add(vStab);

  const hStab = new THREE.Mesh(
    new THREE.BoxGeometry(0.32, 0.04, 0.85),
    material
  );
  hStab.position.set(-0.95, 0.05, 0);
  group.add(hStab);

  return group;
}

export default function PlaneScene({
  className,
  size = 400,
  interactive = true,
  wireframe = false,
  scale = 1,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

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
    camera.position.set(0, 0.4, 4.6);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dir = new THREE.DirectionalLight(0x7c3aed, 1.2);
    dir.position.set(-3, 4, 4);
    scene.add(dir);
    const dir2 = new THREE.DirectionalLight(0xa78bfa, 0.35);
    dir2.position.set(3, -2, 2);
    scene.add(dir2);

    const plane = buildPlaneGroup(wireframe);
    plane.scale.setScalar(scale);
    scene.add(plane);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    if (interactive) {
      canvas.addEventListener('mousemove', onMouseMove);
    }

    let raf = 0;
    const start = performance.now();
    const animate = () => {
      const t = (performance.now() - start) / 1000;
      plane.rotation.y += 0.003;

      if (interactive) {
        const targetX = mouseRef.current.y * 0.25;
        const targetZ = -mouseRef.current.x * 0.25;
        plane.rotation.x += (targetX - plane.rotation.x) * 0.06;
        plane.rotation.z += (targetZ - plane.rotation.z) * 0.06;
      }

      plane.position.y = Math.sin(t * 1.2) * 0.08;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      if (interactive) canvas.removeEventListener('mousemove', onMouseMove);
      plane.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [size, interactive, wireframe, scale]);

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
