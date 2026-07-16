import * as THREE from 'three';
import { Flock } from './flock.js'; // Assuming flock.js is in the same directory

export function startBoidSimulation(canvasElement) {
  // let animationFrameId; // This was in the prompt but renderer.setAnimationLoop handles it.
  const scene = new THREE.Scene();
  
  let width = window.innerWidth;
  let height = window.innerHeight;

  const camera = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
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
  renderer.setSize(width, height);

  const simulationDimensions = {
    width: width,
    height: height
  };
  const flock = new Flock(scene, 30, simulationDimensions);

  function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;

    simulationDimensions.width = width;
    simulationDimensions.height = height;

    camera.left = width / -2;
    camera.right = width / 2;
    camera.top = height / 2;
    camera.bottom = height / -2;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
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