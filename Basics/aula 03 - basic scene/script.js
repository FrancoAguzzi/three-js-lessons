// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const cube = new THREE.Mesh(geometry, material);

// Adding cube to our scene
scene.add(cube);

// Camera
const sizes = { width: 800, height: 600 };
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(75, aspectRatio);

// Moving camera
camera.position.z = 4;

// Adding camera to our scene
scene.add(camera);

// Rendering in canvas
const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
