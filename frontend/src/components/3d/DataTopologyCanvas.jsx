import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DataTopologyCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Create 3D Data Particles and Neural Connections
    const particleCount = window.innerWidth < 768 ? 90 : 180;
    const positions = new Float32Array(particleCount * 3);
    const speeds = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = (Math.random() - 0.5) * 60;
      positions[i + 2] = (Math.random() - 0.5) * 50;

      speeds.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      });
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Material (Glowing Emerald / Cyan Data Nodes)
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 1.2,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particleSystem);

    // Central 3D Geometric Data Core (Icosahedron Wireframe)
    const coreGeometry = new THREE.IcosahedronGeometry(14, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Inner glowing sphere
    const innerGeometry = new THREE.SphereGeometry(6, 16, 16);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerMesh);

    // Dynamic Connections Line Segments
    const maxConnections = particleCount * 4;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.03;
      mouseY = (e.clientY - windowHalfY) * 0.03;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const posAttr = particlesGeometry.attributes.position;
    const posArray = posAttr.array;

    const animate = () => {
      if (!prefersReducedMotion) {
        // Smooth camera lerp with mouse
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        camera.position.x = targetX;
        camera.position.y = -targetY;
        camera.lookAt(scene.position);

        // Rotate central core
        coreMesh.rotation.x += 0.002;
        coreMesh.rotation.y += 0.003;
        innerMesh.rotation.x -= 0.003;
        innerMesh.rotation.y -= 0.004;

        // Animate particles
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          posArray[i3] += speeds[i].x;
          posArray[i3 + 1] += speeds[i].y;
          posArray[i3 + 2] += speeds[i].z;

          // Wrap boundaries
          if (posArray[i3] > 40 || posArray[i3] < -40) speeds[i].x = -speeds[i].x;
          if (posArray[i3 + 1] > 30 || posArray[i3 + 1] < -30) speeds[i].y = -speeds[i].y;
          if (posArray[i3 + 2] > 25 || posArray[i3 + 2] < -25) speeds[i].z = -speeds[i].z;
        }
        posAttr.needsUpdate = true;

        // Build dynamic connection lines between nearby particles
        let connectionCount = 0;
        const linePos = lineGeometry.attributes.position.array;
        const lineCol = lineGeometry.attributes.color.array;

        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const dx = posArray[i * 3] - posArray[j * 3];
            const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
            const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 12 && connectionCount < maxConnections) {
              const baseIdx = connectionCount * 6;
              linePos[baseIdx] = posArray[i * 3];
              linePos[baseIdx + 1] = posArray[i * 3 + 1];
              linePos[baseIdx + 2] = posArray[i * 3 + 2];

              linePos[baseIdx + 3] = posArray[j * 3];
              linePos[baseIdx + 4] = posArray[j * 3 + 1];
              linePos[baseIdx + 5] = posArray[j * 3 + 2];

              // Color fading with distance
              const alpha = 1.0 - dist / 12;
              lineCol[baseIdx] = 0.22; // R
              lineCol[baseIdx + 1] = 0.74 * alpha; // G (Emerald)
              lineCol[baseIdx + 2] = 0.97 * alpha; // B (Cyan)

              lineCol[baseIdx + 3] = 0.22;
              lineCol[baseIdx + 4] = 0.74 * alpha;
              lineCol[baseIdx + 5] = 0.97 * alpha;

              connectionCount++;
            }
          }
        }

        lineGeometry.setDrawRange(0, connectionCount * 2);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particleMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
      aria-hidden="true"
    />
  );
};

export default DataTopologyCanvas;
