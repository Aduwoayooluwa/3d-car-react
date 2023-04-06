import { Canvas } from '@react-three/fiber';
import './App.css';
import { Suspense } from 'react';
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Ground from './components/Ground';
import { Car } from './components/Car';
import { Rings } from './components/Rings';

function CarShow() {
  return (<>
  <OrbitControls />
  <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

    <color args={[0,0,0]} attach={"background"}/>

    
    <spotLight
    color={[1,0.25,0.7]}
    intensity={1.5}
    angle={0.6}
    penumbra={0.5}
    position={[5,5,0]}
    castShadow
    shadowBias={-0.0001}

    />

<spotLight
    color={[0.14,0.5,1]}
    intensity={2}
    angle={0.6}
    penumbra={0.5}
    position={[-5,5,0]}
    castShadow
    shadowBias={-0.0001}

    />
    <Rings />
    <Ground />
    <Car />
    <CubeCamera resolution={256} frames={Infinity}>
      {
        (texture) => (
          <>
          <Environment map={texture} />
          {/* <Car /> */}
          </>
        )
      }
    </CubeCamera>
  {/* <mesh>
    <boxGeometry args={[3, 5, 7]}/>
    <meshBasicMaterial color='green'/>
  </mesh>
     */}
  </>)
}
function App() {
  return (
    <div className="bg-red-200 h-screen wfull grid place-items-center">
          <Suspense fallback={null}>
            <Canvas shadows>
                <CarShow />
                
            </Canvas>
          </Suspense>
    </div>
  );
}

export default App;
