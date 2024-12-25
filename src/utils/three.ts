import * as THREE from 'three';
import { BOX_MATERIALS } from '../constants/materials';

export function createBox(width: number, height: number, depth: number): THREE.Mesh {
  // Convert centimeters to meters (THREE.js uses meters)
  const widthInMeters = width / 100;
  const heightInMeters = height / 100;
  const depthInMeters = depth / 100;

  const geometry = new THREE.BoxGeometry(widthInMeters, heightInMeters, depthInMeters);
  const material = new THREE.MeshStandardMaterial({
    color: BOX_MATERIALS[0],
    metalness: 0.1,
    roughness: 0.8,
  });

  return new THREE.Mesh(geometry, material);
}

export function setupLighting(scene: THREE.Scene): void {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);

  scene.add(ambientLight);
  scene.add(directionalLight);
}