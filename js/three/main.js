import * as THREE from 'three';
import { Flock } from './flock.js';

const size = {
  width : window.innerWidth,
  height : window.innerWidth
};
export default size;

var near = 0.1;
var far = 10.0;
var frustumSize = 1000;

function onWindowResize() {
  var aspect = window.innerWidth / window.innerHeight;

  // update size variable
  size.width = frustumSize * aspect;
  size.height = frustumSize;
  
  camera.left = - size.width / 2;
  camera.right = size.width / 2;
  camera.top = size.height / 2;
  camera.bottom = - size.height / 2;

  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
addEventListener("resize", onWindowResize, false);

// Scene
const scene = new THREE.Scene();

/*export function updateBackgroundColor() {
  var root = document.querySelector('body');
  var rootStyles = getComputedStyle(root);
  var color = rootStyles.getPropertyValue('--background-color');
  console.log(color);

  scene.background = new THREE.Color(color);
}*/

// Camera
const camera = new THREE.OrthographicCamera({
  near: near, 
  far: far
});
camera.position.z = 5;

// Renderer
const canvas = document.querySelector('#c');;
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true,
  alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio);

onWindowResize();
//updateBackgroundColor();

let flock = new Flock(scene, 30);

function render() {
	flock.update();

	renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );