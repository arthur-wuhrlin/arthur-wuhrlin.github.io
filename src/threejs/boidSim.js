import * as THREE from 'three';
import { Flock } from './flock.js'; // Assuming flock.js is in the same directory

export function startBoidSimulation(canvasElement) {
  // let animationFrameId; // This was in the prompt but renderer.setAnimationLoop handles it.
  const scene = new THREE.Scene();
  
  const frustumSize = 1000;
  let aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.OrthographicCamera(
    frustumSize * aspect / -2,
    frustumSize * aspect / 2,
    frustumSize / 2,
    frustumSize / -2,
    0.1, // near
    10   // far
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const simulationDimensions = {
    width: frustumSize * aspect,
    height: frustumSize
  };
  const flock = new Flock(scene, 30, simulationDimensions);

  function onWindowResize() {
    aspect = window.innerWidth / window.innerHeight;
    // Update simulationDimensions if they are used by other parts of the simulation dynamically
    simulationDimensions.width = frustumSize * aspect;
    simulationDimensions.height = frustumSize;
    camera.left = frustumSize * aspect / -2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = frustumSize / -2;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize);

  function render() {
    flock.update(); // Assuming flock has an update method
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(render);

  // Return cleanup function
  return () => {
    window.removeEventListener('resize', onWindowResize);
    renderer.setAnimationLoop(null);
    
    scene.traverse(object => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
    // If Flock has a specific dispose method, call it here
    // if (flock && typeof flock.dispose === 'function') {
    //   flock.dispose();
    // }
    renderer.dispose();
  };
}