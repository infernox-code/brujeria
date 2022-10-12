import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import Model from "./witch_hat";

const Box = () => {
  const modelRef = useRef(null);
  useFrame((state, delta) => (modelRef.current.rotation.y += 0.005));

  return <Model position={[0, -0.47, 3]} reference={modelRef} />;
};

const ThreeComponent = () => {
  return (
    <Canvas style={{ height: "750px", width: "540px" }}>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      <hemisphereLight
        skyColor={0xffeeb1}
        groundColor={0x080820}
        intensity={1.35}
      />
      <pointLight intensity={0.2} position={[0, 3, 0]} />
      <pointLight intensity={0.1} position={[0, -1, 0]} />
      <pointLight intensity={0.1} position={[1, 0, 0]} />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  );
};

export default ThreeComponent;
