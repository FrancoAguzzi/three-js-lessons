import "./style.css";
import * as THREE from "three";

// Scene
const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// mesh.position.x = 1;
// mesh.position.y = -0.25;

// mesh.position.set(1, -0.25, 1);

// mesh.scale.x = 1.5;
// mesh.scale.y = 1;
// mesh.scale.z = 0.7;

// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.75;
// mesh.rotation.z = Math.PI * 0.25;

scene.add(mesh);

// Utils
console.log("Vector length: ", mesh.position.length());
console.log("Normalize: ", mesh.position.normalize());

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Utils
console.log(
  "Distance from another Vector3: ",
  mesh.position.distanceTo(camera.position)
);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
