import * as THREE from "three"

const UP = new THREE.Vector3(0, 0, 1);
const SIZE = new THREE.Vector2(25.0, 25.0);

const MAX_VELOCITY = 2;
const DETECTION_RADIUS = 75;
const REPULSION_RADIUS = 50;

var cohesionSlider = document.getElementById("cohesion");
var alignmentSlider = document.getElementById("alignment");
var repulsionSlider = document.getElementById("repulsion");

var cohesionOutput = document.getElementById("cohesion-value");
var alignmentOutput = document.getElementById("alignment-value");
var repulsionOutput = document.getElementById("repulsion-value");

cohesionSlider.oninput = function() {
  cohesionOutput.innerHTML = this.value;
}

alignmentSlider.oninput = function() {
  alignmentOutput.innerHTML = this.value;
}

repulsionSlider.oninput = function() {
  repulsionOutput.innerHTML = this.value;
}

export class Boid {
  constructor(
    scene, 
    position = new THREE.Vector2(Math.random() * window.innerWidth - window.innerWidth / 2, Math.random() * window.innerHeight - window.innerHeight / 2),
    direction = new THREE.Vector2(Math.random(), Math.random()).normalize(), 
    initialSpeed = 1.0) {

    this.setMesh(scene);

    this.position = position;
    this.velocity = direction.multiplyScalar( initialSpeed );
    this.acceleration = new THREE.Vector2( 0, 0 );

    // update gfx direction and set velocity
    this.direction = new THREE.Vector2( 0, -1 ); // by default the img is pointing (0 , -1)
    this.setDirection(this.velocity);

    /*console.log(this.position);
    console.log(this.velocity);
    console.log(this.acceleration);*/
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
    let count = 0;

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
    let repulsion = this.repulsion(neighbors).multiplyScalar(repulsionSlider.value / 100);
    console.log("Repulsion : ", repulsion);
    let alignment = this.align(neighbors).multiplyScalar(alignmentSlider.value / 100);
    //console.log("Alignment : ", alignment);
    let cohesion = this.cohesion(neighbors).multiplyScalar(cohesionSlider.value / 100);
    //console.log("Cohesion : ", cohesion);

    this.acceleration = repulsion;
    if(this.acceleration.length() < 1) {
      this.acceleration.add(cohesion);
    }

    if(this.acceleration.length() < 1) {
      this.acceleration.add(alignment);
    }

    this.acceleration.normalize();

    // Update velocity
    this.velocity.add(this.acceleration);
    this.velocity.normalize().multiplyScalar(MAX_VELOCITY);

    // Update position
    this.position.add(this.velocity);

    // clamp in view
    if(this.position.x < -innerWidth / 2) {
      this.position.setX(innerWidth / 2);
    } else if(this.position.x > innerWidth / 2) {
      this.position.setX(-innerWidth / 2);
    } 
    
    if(this.position.y < -innerHeight / 2) {
      this.position.setY(innerHeight / 2);
    } else if(this.position.y > innerHeight / 2) {
      this.position.setY(-innerHeight / 2);
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
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff, side: THREE.DoubleSide });

    // Create the mesh  
    this.mesh = new THREE.Mesh(geometry, material);
    scene.add(this.mesh);
  }

  setColor(color) {
    this.mesh.material.color.set(color);
  }
}