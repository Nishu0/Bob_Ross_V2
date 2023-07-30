"use client"
import '../globals.css';
import { useEffect, useRef, useState } from 'react';

const Paint = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [color, setColor] = useState('lightBlue');
  const [penSize, setPenSize] = useState(5);
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    setCtx(context);
  }, []);

  function start(e) {
    setPainting(true);
    draw(e);
  }

  function finish() {
    setPainting(false);
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = penSize;
    ctx.lineCap = 'round';

    let x = e.nativeEvent.offsetX; // Use nativeEvent.offsetX instead of offsetX
    let y = e.nativeEvent.offsetY; // Use nativeEvent.offsetY instead of offsetY

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  const clearCanvas = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  const eraser = () => {
    setPenSize(10);
    setColor('black');
  };

  const selectColor = (e) => {
    removeActive();
    setColor(e.target.getAttribute('data-value')); // Use e.target instead of e.getAttribute
    e.target.classList.add('active');
  };

  const removeActive = () => {
    const allColorButtons = document.querySelectorAll('.color');
    allColorButtons.forEach((c) => {
      c.classList.remove('active');
    });
  };

  const penSizeChanging = (size) => {
    setPenSize(size);
  };

  const pickedColorChange = (col) => {
    setColor(col.target.value);
  };

  return (
    <div className="wrapper">
      <section className="sidebar">
        <h1 className="title">Paint using js</h1>
        <ul className="all-color">
          {/* Color palate */}
          <li className="color color-1" data-value="red" onClick={selectColor}></li>
          <li className="color color-2" data-value="blue" onClick={selectColor}></li>
          <li className="color color-3" data-value="green" onClick={selectColor}></li>
          <li className="color color-4" data-value="white" onClick={selectColor}></li>
          <li className="color color-5" data-value="yellow" onClick={selectColor}></li>
          <li className="color color-6" data-value="pink" onClick={selectColor}></li>
          
          {/* Eraser */}
          <li>
            <button onClick={eraser}><i className="fa-solid fa-eraser"></i></button>
          </li>
          
          {/* Clear canvas */}
          <li>
            <button onClick={clearCanvas}><i className="fa-solid fa-trash"></i></button>
          </li>

          {/* Tools */}
          <li>
            <label htmlFor="size">pensize:</label>
            <input type="range" name="size" id="size" min="2" max="40" step="5" value={penSize} onChange={(e) => penSizeChanging(e.target.value)} />
          </li>

          {/* Select color */}
          <li>
            <label htmlFor="pick-color">pick color:</label>
            <input id="pick-color" name="pick-color" type="color" value={color} onChange={pickedColorChange} />
          </li>
 
          {/* Download art */}
          <li>
            <label htmlFor="down-load">download:</label>
            <a href="#" id="down-load" name="down-load" download="paint.png" name="links">
              <i className="fa-solid fa-download fa-lg"></i>
            </a>   
          </li>
        </ul>
      </section>

      <main className="canvas-container">
        {/* Canvas element */}
        <canvas ref={canvasRef} id="canvas" width="1000" height="700" />
      </main>
    </div>
  );
};

export default Paint;
