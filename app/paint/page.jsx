"use client"
import React, { useState, useRef } from 'react';
import Navbar from '../../components/Navbar';
import YouTubePlayer from '../../components/Youtube';
import CanvasComponent from '../../components/Canvas';
import ColorsWrapper from '../../components/Colours';
import YouTubeURLInput from '../../components/URL';

import '../../styles/globals.css';

const Paint = () => {
  const [color, setColor] = useState('lightBlue');
  const [penSize, setPenSize] = useState(5);
  const [videoURL, setVideoURL] = useState('');
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

  const handleYouTubeVideo = (url) => {
    setVideoURL(url);
  };

  return (
    <div>
      <Navbar /> 
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
          canvasRef={canvasRef} // Pass the canvasRef to ColorsWrapper
        />

        {/* YouTube URL Input */}
        
        {/* YouTube player and Canvas */}
        <div className="youtube-and-canvas-wrapper">
          {videoURL ? (
            <div className="youtube-wrapper">
              <YouTubePlayer videoURL={videoURL} />
            </div>
          ) : null}
          <div className="canvas-wrapper">
            <CanvasComponent ref={canvasRef} width={640} height={360} color={color} penSize={penSize} />
          </div>
        </div>
        <YouTubeURLInput onURLSubmit={handleYouTubeVideo} />

      </main>
    </div>
  );
};

export default Paint;
