const scene = new THREE.Scene() //where and what will be rendered
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z=50;

function animate(){
    requestAnimationFrame(animate);
    torus.rotation.x+=0.03;
    torus.rotation.y+=0.01;
    renderer.render(scene, camera);
}
animate();