"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";

const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    vec3 displaced = position + normal * (sin(position.y * 3.2 + uTime * 0.35) * 0.018);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  void main() {
    float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.2);
    float wave = 0.5 + 0.5 * sin(vPosition.y * 3.0 - uTime * 0.22);
    vec3 deep = vec3(0.018, 0.09, 0.075);
    vec3 jade = vec3(0.13, 0.32, 0.22);
    vec3 lime = vec3(0.78, 1.0, 0.42);
    vec3 color = mix(deep, jade, wave * 0.5);
    color += lime * fresnel * 0.56;
    gl_FragColor = vec4(color, 0.86);
  }
`;

function GlassOrb() {
  const group = useRef(null);
  const material = useRef(null);
  const reducedMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (reducedMotion) return;
    if (material.current) material.current.uniforms.uTime.value += delta;
    if (group.current) {
      group.current.rotation.y += delta * 0.09;
      group.current.rotation.x += (state.pointer.y * 0.08 - group.current.rotation.x) * delta;
      group.current.rotation.y += (state.pointer.x * 0.08) * delta;
    }
  });

  return (
    <group ref={group}>
      <Float speed={0.45} rotationIntensity={0.08} floatIntensity={0.13}>
        <mesh>
          <icosahedronGeometry args={[1.18, 5]} />
          <shaderMaterial
            ref={material}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{ uTime: { value: 0 } }}
            transparent
          />
        </mesh>
        <mesh scale={1.025}>
          <icosahedronGeometry args={[1.18, 2]} />
          <meshBasicMaterial
            color="#d7ff70"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>
        <Sparkles
          count={28}
          scale={3.5}
          size={1.35}
          speed={0.16}
          opacity={0.48}
          color="#d7ff70"
        />
      </Float>
    </group>
  );
}

export default function OrbScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      dpr={[1, 1.25]}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 4]} intensity={1.5} color="#d7ff70" />
      <GlassOrb />
    </Canvas>
  );
}
