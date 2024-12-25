import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box3D } from './components/Box3D';
import { DimensionControls } from './components/DimensionControls';
import { Box, Eye, Smartphone } from 'lucide-react';
import { generateUSDZ } from './utils/usdz';

function App() {
  const [dimensions, setDimensions] = useState({
    width: 20.00,
    height: 20.00,
    depth: 20.00,
  });

  const handleARView = async () => {
    try {
      const usdzBlob = await generateUSDZ(dimensions);
      const url = URL.createObjectURL(usdzBlob);
      window.open(url, '_blank');
      // Clean up the object URL after a short delay
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error('Failed to generate USDZ:', error);
    }
  };

  return (
    <div className="h-[100dvh] bg-gray-50 flex flex-col">
      <div className="max-w-4xl mx-auto w-full p-4 flex-1 flex flex-col gap-4 overflow-auto pb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-2">
            <Box className="w-6 h-6 text-emerald-500" />
            <div className="flex justify-between items-center w-full">
              <h1 className="text-xl font-bold text-gray-800">Will it fit?</h1>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-2 rounded-full flex gap-2"><Smartphone className='w-4 h-4' />iPhone required</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Does your furniture fit in your room? Enter the dimensions below to find out!
          </p>

          <DimensionControls
            dimensions={dimensions}
            onChange={setDimensions}
          />
        </div>

        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex-1 flex-grow min-h-[300px]">
          <Canvas camera={{ position: [1, 1, 1], fov: 60 }}>
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} />
            <Box3D {...dimensions} />
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>
        <div className='flex justify-center bottom-16 z-10'>
          <button
            onClick={handleARView}
            className="px-4 py-2 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-colors flex items-center gap-2 text-lg"
          >
            <Eye className="w-4 h-4" />
            <span>See in my room</span>
          </button>
        </div>
      </div>
    </div >
  );
}

export default App;