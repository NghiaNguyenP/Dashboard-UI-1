"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useState } from "react";

const RoomVisualizationPage = () => {
  const [selectedData, setSelectedData] = useState<string | null>(null);

  // Handler for button clicks
  const handleButtonClick = (data: string) => {
    setSelectedData(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">3D Room Visualization</h1>

      {/* 3D Room Visualization */}
      <div style={{ width: "100%", height: "100vh" }}>
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={true} />

          {/* Room Box */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color="#8fa3b8" />
          </mesh>

          {/* Clickable Buttons */}
          <Html position={[-1.2, 1, 1]}>
            <button
              onClick={() => handleButtonClick("Temperature Data")}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Sensor 1
            </button>
          </Html>
          <Html position={[1, 1, -1]}>
            <button
              onClick={() => handleButtonClick("Humidity Data")}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Sensor 2
            </button>
          </Html>
          <Html position={[0, -1, 1.5]}>
            <button
              onClick={() => handleButtonClick("PM2.5 Data")}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Sensor 3
            </button>
          </Html>
        </Canvas>

        {/* Data Display */}
        {selectedData && (
          <div className="absolute top-10 left-10 bg-white p-4 rounded shadow-lg">
            <h2 className="font-bold text-lg">{selectedData}</h2>
            <p>This is the data for {selectedData.toLowerCase()}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomVisualizationPage;
