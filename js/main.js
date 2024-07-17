import * as THREE from 'three';
import { Boid } from './boid.js'
import { cos, sin} from 'three/examples/jsm/nodes/Nodes.js';
import { Flock } from './flock.js';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-innerWidth / 2, innerWidth / 2, -innerHeight / 2, innerHeight / 2, 0.1, 10 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let flock = new Flock(scene, 100);

const clock = new THREE.Clock();
clock.start();
function animate() {
	let delta = clock.getDelta();

	flock.update(delta);
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );