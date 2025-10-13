import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float, Decal, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, rotationSpeed }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={rotationSpeed || 1}  // auto-rotate speed
      rotationIntensity={1}
      floatIntensity={0.5}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, size, rotationSpeed }) => {
  return (
    <Canvas frameloop="always" dpr={[1, 1.5]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} rotationSpeed={rotationSpeed} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
