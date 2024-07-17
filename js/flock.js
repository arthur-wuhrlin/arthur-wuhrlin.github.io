import * as THREE from "three"
import { Boid } from "./boid";

const DETECTION_RADIUS = 100;

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

  update(delta)  {
    // Clean
    this.lines.forEach(line => {
      this.scene.remove(line);
    })
    this.lines = [];

    let boid0 = this.boidArray[0];
    let neighbors = [];
    this.boidArray.forEach(candidate => {
      let dir = new THREE.Vector2();
      dir.subVectors(candidate.position, boid0.position);
      if(candidate != boid0 && 
        boid0.position.distanceToSquared(candidate.position) < DETECTION_RADIUS * DETECTION_RADIUS && 
        Math.abs(boid0.direction.angleTo(dir)) < 3 * Math.PI / 4
      ) {
        // DEBUG
        candidate.setColor(0xff0000);
        let line = createLine(boid0.position, candidate.position);
        this.lines.push(line);
        this.scene.add(line);

        neighbors.push(candidate);
      }
      else {
        candidate.setColor(0xff00ff);
      }
    });
    boid0.update(delta, neighbors);

    this.boidArray.forEach(boid => {
      if(boid != boid0) {
        boid.update(delta, []);
      }
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