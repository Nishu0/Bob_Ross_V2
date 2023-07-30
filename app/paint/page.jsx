"use client"
import React, { useState, useRef } from 'react';
import YouTubePlayer from '../../components/Youtube';
import CanvasComponent from '../../components/Canvas';
import ColorsWrapper from '../../components/Colours';

const Paint = () => {
  const [color, setColor] = useState('lightBlue');
  const [penSize, setPenSize] = useState(5);
  const canvasRef = useRef(null);

  const selectColor = (col) => {
    setColor(col);
  };

  const eraser = () => {
    setPenSize(10);
    setColor('black');
  };

  const clearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
    }
  };

  const penSizeChanging = (size) => {
    setPenSize(size);
  };

  const pickedColorChange = (col) => {
    setColor(col);
  };

  return (
    <div>
      <h1 className="title">Paint using js</h1>
      <main id="wrapper">
        {/* Colors wrapper */}
        <ColorsWrapper
          selectColor={selectColor}
          eraser={eraser}
          clearCanvas={clearCanvas}
          penSizeChanging={penSizeChanging}
          pickedColorChange={pickedColorChange}
          color={color}
          penSize={penSize}
        />

        {/* YouTube player */}
        <div className="youtube-wrapper">
          <YouTubePlayer />
        </div>

        {/* Canvas component */}
        <div className="canvas-wrapper">
          <CanvasComponent ref={canvasRef} width={640} height={360} color={color} penSize={penSize} />
        </div>
      </main>
    </div>
  );
};

export default Paint;
