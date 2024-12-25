import * as THREE from 'three';
import { USDZExporter } from 'three-stdlib';
import { createBox, setupLighting } from './three';

interface BoxDimensions {
  width: number;
  height: number;
  depth: number;
}

export async function generateUSDZ(dimensions: BoxDimensions): Promise<Blob> {
  const scene = new THREE.Scene();

  // Add camera
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.set(0, 0, 5);
  scene.add(camera);

  // Create and position box
  const box = createBox(dimensions.width, dimensions.height, dimensions.depth);
  box.position.set(0, 0, 0);
  scene.add(box);

  // Setup lighting
  setupLighting(scene);

  // Export to USDZ
  const exporter = new USDZExporter();
  const usdzArrayBuffer = await exporter.parse(scene);

  return new Blob([usdzArrayBuffer], { type: 'model/vnd.usdz+zip' });
}