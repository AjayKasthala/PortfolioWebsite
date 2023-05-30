/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';
import { AKPic } from '../../assets';

const Avatar = ({ isMobile }) => {
    const akTexture = new THREE.TextureLoader().load(AKPic);
    const ajay = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: akTexture }));
    // const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={ajay.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ?  [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

// const AvatarCanvas = () => {
//   //Add a listener for changes to the screen size
//   const [isMobile,setIsMobile] = useState(false);

//   useEffect(()=> {
//     const mediaQuery = window.matchMedia('(max-width:500px)');

//     //Set the intial value of the 'isMobile' state variable
//     setIsMobile(mediaQuery.matches);
    
//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     }
    
//     // Add the callback function as a listener for changes to the media query 
//     mediaQuery.addEventListener('change',handleMediaQueryChange);

//     //Remove the listener when the component is unmounted
//     return() => {
//       mediaQuery.removeEventListener('change',handleMediaQueryChange);
//     }

//   },[])
  


//   return (
//     <Canvas
//       frameLoop="demand"
//       shadows
//       camera={{ position: [20,3,5], fov:25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader/>}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI/2}
//           minPolarAngle={Math.PI/2}
//         />
//         <Avatar isMobile={isMobile} />
//       </Suspense>
//       <Preload all/>
//     </Canvas>
//   )
// }

export default Avatar;