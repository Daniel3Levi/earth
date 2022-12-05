import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './components/earth/Earth';
import TopSection from './components/topSection/TopSection';

const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <CanvasContainer>
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
