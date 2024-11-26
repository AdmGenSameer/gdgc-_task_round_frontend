// Three.js Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create animated background particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.005,
  color: 0x00ffbb
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Animation
function animate() {
  requestAnimationFrame(animate);
  particlesMesh.rotation.x += 0.0001;
  particlesMesh.rotation.y += 0.0001;
  renderer.render(scene, camera);
}

animate();

// GSAP Animations
gsap.from('.animated-text', {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power4.out'
});

gsap.from('.card', {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: 'power4.out'
});

gsap.from('.avatar', {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  delay: 1,
  ease: 'power4.out'
});

// Responsive handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
