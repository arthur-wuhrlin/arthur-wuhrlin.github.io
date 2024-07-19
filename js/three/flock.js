import * as THREE from "three"
import { Boid, DETECTION_RADIUS } from "./boid.js";

export class Flock {
  constructor(
    scene, 
    boidNumber) {
    this.boidArray = [];
    this.scene = scene;
    this.lines = [];
    for (let index = 0; index < boidNumber; index++) {
      this.boidArray.push(new Boid(scene));
    }
  }

  update()  {
    this.boidArray.forEach(boid => {
      let neighbors = [];
      this.boidArray.forEach(candidate => {
        let dir = new THREE.Vector2();
        dir.subVectors(candidate.position, boid.position);

        if(candidate != boid && boid.position.distanceToSquared(candidate.position) < DETECTION_RADIUS * DETECTION_RADIUS && Math.abs(boid.velocity.angleTo(dir)) < 3 * Math.PI / 4)
        {
          neighbors.push(candidate);
        }
      });

      boid.update(neighbors);
    });
  }
}

function createLine(p1, p2) {
  var geometry = new THREE.BufferGeometry();

  // Add the two points to the geometry
  const vertices = new Float32Array([
    p1.x, p1.y, 0.0,
    p2.x, p2.y, 0.0
  ]);

  const indices = [
    0, 1
  ];

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(indices);

  // Create a material
  var material = new THREE.LineBasicMaterial({ color: 0xffffff });

  // Create a line
  var line = new THREE.Line(geometry, material);
  return line;
}