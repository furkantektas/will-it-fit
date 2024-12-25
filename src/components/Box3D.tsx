import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { BOX_MATERIALS } from '../constants/materials';

interface Box3DProps {
  width: number;
  height: number;
  depth: number;
}

export const Box3D: React.FC<Box3DProps> = ({ width, height, depth }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[width / 100, height / 100, depth / 100]} />
      {BOX_MATERIALS.map((color, index) => (
        <meshStandardMaterial key={index} attach={`material-${index}`} color={color} />
      ))}
    </mesh>
  );
}