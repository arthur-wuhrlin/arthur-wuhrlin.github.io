import * as THREE from "three"
import size from "./main.js";

const UP = new THREE.Vector3(0, 0, 1);
const SIZE = new THREE.Vector2(25.0, 25.0);

const MAX_VELOCITY = 1.0;
const MAX_ACCELERATION = 0.05 * MAX_VELOCITY;

export const DETECTION_RADIUS = 75;
const REPULSION_RADIUS = 25;

export class Boid {
  constructor(
    scene, 
    position = new THREE.Vector2(Math.random() * size.width - size.width / 2, Math.random() * size.height - size.height / 2),
    direction = new THREE.Vector2(Math.random(), Math.random()).normalize(), 
    initialSpeed = MAX_VELOCITY) {

    this.setMesh(scene);

    this.position = position;
    this.velocity = direction.multiplyScalar( initialSpeed );
    this.acceleration = new THREE.Vector2( 0, 0 );

    // update gfx direction and set velocity
    this.direction = new THREE.Vector2( 0, -1 ); // by default the img is pointing (0 , -1)
    this.setDirection(this.velocity);
  }

  align(neighbors) {
    let desiredVel = new THREE.Vector2();
    desiredVel.add(this.velocity);
    let count = 1;

    neighbors.forEach(boid => {
      let d = this.position.distanceToSquared(boid.position);
      if(d < DETECTION_RADIUS * DETECTION_RADIUS) {
        desiredVel.add(boid.velocity);
        count++;
      }
    });

    desiredVel.divideScalar(count);
   
    let steer = desiredVel.sub(this.velocity);
    steer.clampLength(0, 1);
    return steer;
  }

  cohesion(neighbors) {
    let desiredPos = new THREE.Vector2();
    desiredPos.add(this.position);
    let count = 1;

    neighbors.forEach(boid => {
      let d = this.position.distanceToSquared(boid.position);
      if(d < DETECTION_RADIUS * DETECTION_RADIUS) {
        desiredPos.add(boid.position);
        count++;
      }
    });

    if(count) {
      desiredPos.divideScalar(count);
    }
   
    let steer = desiredPos.sub(this.position);
    steer.clampLength(0, 1);
    return steer;
  }

  repulsion(neighbors) {
    let desiredVel = new THREE.Vector2();
    let count = 0;

    if(neighbors.length == 0) {
      return desiredVel;
    }

    neighbors.forEach(boid => {
      let d = this.position.distanceTo(boid.position);
      if(d < REPULSION_RADIUS) {
        let repulsionDirection = new THREE.Vector2();
        repulsionDirection.add(this.position);
        repulsionDirection.sub(boid.position);
        repulsionDirection.divideScalar(d);
        
        desiredVel.add(repulsionDirection);
        count++;
      }
    });

    if(count) {
      desiredVel.divideScalar(count);
    }
   
    let steer = desiredVel.sub(this.velocity);
    steer.clampLength(0, 1);

    return steer;
  }

  update(neighbors) {
    // Compute steering direction
    let repulsion = this.repulsion(neighbors).multiplyScalar(0.65);
    let alignment = this.align(neighbors).multiplyScalar(0.15);
    let cohesion = this.cohesion(neighbors).multiplyScalar(0.15);

    // Update acceleration
    this.acceleration = repulsion;
    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);

    this.acceleration.normalize().multiplyScalar(MAX_ACCELERATION);

    // Update velocity
    this.velocity.add(this.acceleration);
    this.velocity.normalize().multiplyScalar(MAX_VELOCITY);

    // Update position
    this.position.add(this.velocity);

    // clamp in view
    if(this.position.x < -size.width / 2) {
      this.position.setX(size.width / 2);
    } else if(this.position.x > size.width / 2) {
      this.position.setX(-size.width / 2);
    } 
    
    if(this.position.y < -size.height / 2) {
      this.position.setY(size.height / 2);
    } else if(this.position.y > size.height / 2) {
      this.position.setY(-size.height / 2);
    }

    this.setDirection(this.velocity);

    // Update mesh position
    this.mesh.position.set(this.position.x, this.position.y, 0);
  }

  setDirection(direction) {
    let angle = direction.angle() + Math.PI / 2;

    this.mesh.rotation.set(0, 0, angle);
  }

  setMesh(scene) {
    // Create a geometry
    const geometry = new THREE.BufferGeometry();

    // Define the vertices of the boid
    const vertices = new Float32Array([
      0.0,         -SIZE.y / 2,   0.0,  // top left
      SIZE.x / 2,   SIZE.y / 2,   0.0,  // top right
      0.0,          SIZE.y / 3,   0.0,   // bottom left
      -SIZE.x / 2,  SIZE.y / 2,   0.0,  // bottom right
    ]);

    // Define the indices of the vertices to form two triangles
    const indices = [
      0, 1, 2,  // first triangle
      0, 2, 3   // second triangle
    ];

    // Set the attributes for the geometry
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);

    // Create a material
    const rd = Math.random() * 0.8 + 0.1; // clamp to 0.1 - 0.9
    let col = new THREE.Color(rd, rd, rd);
    const material = new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide });

    // Create the mesh  
    this.mesh = new THREE.Mesh(geometry, material);
    scene.add(this.mesh);
  }

  setColor(color) {
    this.mesh.material.color.set(color);
  }
}