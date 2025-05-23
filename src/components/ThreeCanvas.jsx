import React, { useEffect, useRef } from 'react';
import { startBoidSimulation } from '../threejs/boidSim.js'; // Adjusted path

const ThreeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanupSimulation; // Declare here to be accessible in the return function

    if (canvasRef.current) {
      cleanupSimulation = startBoidSimulation(canvasRef.current);
    }
    
    // Return the cleanup function to be called on component unmount
    return () => {
      if (typeof cleanupSimulation === 'function') {
        cleanupSimulation();
      }
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  return <canvas id="c" ref={canvasRef}></canvas>;
};

export default ThreeCanvas;
