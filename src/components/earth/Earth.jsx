import React, { useRef } from 'react';

import EarthDayMap from '../../assets/texteures/8k_earth_daymap.jpg';
// import EarthNightMap from '../../assets/texteures/8k_earth_nightmap.jpg';
import EarthNormalMap from '../../assets/texteures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/texteures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/texteures/8k_earth_clouds.jpg';

import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  //Rendering loop
  // 60 time per sec
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 8;
  });

  return (
    <>
      {/*Light all the canvas | intensity kind of like opacity*/}
      {/* <ambientLight intensity={1} /> */}

      <pointLight color="#faf9ef" position={[2, 0, 5]} intensity={1.2} />

      <Stars />
      {/*mesh for earth clouds*/}
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide} //render both sides
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
}
