import * as THREE from "three"

const UP = new THREE.Vector3(0, 0, 1);
const SIZE = new THREE.Vector2(25.0, 25.0);

const MAX_VELOCITY = 2;

export class Boid {
  constructor(
    scene, 
    position = new THREE.Vector2(Math.random() * window.innerWidth - window.innerWidth / 2, Math.random() * window.innerHeight - window.innerHeight / 2),
    direction = new THREE.Vector2(Math.random(), Math.random()).normalize(), 
    initialSpeed = 100.0) {

    this.setMesh(scene);

    this.position = position;
    this.velocity = direction.multiplyScalar( initialSpeed );
    this.acceleration = new THREE.Vector2( 0, 0 );

    // update gfx direction and set velocity
    this.direction = new THREE.Vector2( 0, -1 ); // by default the img is pointing (0 , -1)
    this.setDirection(this.velocity);

    console.log(this.position);
    console.log(this.velocity);
    console.log(this.acceleration);
  }

  update(delta, neighbors) {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

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

    this.velocity.clampLength(0, MAX_VELOCITY);
    this.setDirection(this.velocity);

    // Update mesh position
    this.mesh.position.set(this.position.x, this.position.y, 0);
  }

  setDirection(direction) {
    let angle = this.direction.angleTo(direction);
    this.direction = direction.clone();
    this.direction.normalize();

    this.mesh.rotateOnAxis(UP, angle);
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