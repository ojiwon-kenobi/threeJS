let scene, camera, renderer, torus;

function init(){
    scene = new THREE.Scene() //where and what will be rendered
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    const texture = new THREE.TextureLoader().load('golden_marble.jpg');
    const material = new THREE.MeshBasicMaterial({map:texture});
    torus = new THREE.Mesh( geometry, material );
    scene.add( torus );
    
    camera.position.z=50;
}

function animate(){
    requestAnimationFrame(animate);
    torus.rotation.x+=0.03;
    torus.rotation.y+=0.01;
    renderer.render(scene, camera);
}

function onWindowResize(){
    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();