import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';



const ColorsWrapper = ({ selectColor, eraser, clearCanvas, penSizeChanging, pickedColorChange, color, penSize, canvasRef }) => {
  const downloadCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.downloadCanvas();
    }
  };

  return (
    <section className="tools">
      <ul className="all-color">
        {/* Color palate */}
        <li className="color color-1" data-value="red" onClick={() => selectColor('red')}></li>
        <li className="color color-2" data-value="blue" onClick={() => selectColor('blue')}></li>
        <li className="color color-3" data-value="green" onClick={() => selectColor('green')}></li>
        <li className="color color-4" data-value="white" onClick={() => selectColor('white')}></li>
        <li className="color color-5" data-value="yellow" onClick={() => selectColor('yellow')}></li>
        <li className="color color-6" data-value="pink" onClick={() => selectColor('pink')}></li>

        {/* Eraser */}
        <li>
          <button onClick={eraser}>
          <FontAwesomeIcon icon={faEraser} />
          </button>
        </li>

        {/* Clear canvas */}
        <li>
          <button onClick={clearCanvas}>
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>

        {/* Tools */}
        <li>
          <label htmlFor="size">pensize:</label>
          <input type="range" name="size" id="size" min="2" max="40" step="5" value={penSize} onChange={(e) => penSizeChanging(e.target.value)} />
        </li>

        {/* Select color */}
        <li>
          <label htmlFor="pick-color">pick color:</label>
          <input id="pick-color" name="pick-color" type="color" value={color} onChange={(e) => pickedColorChange(e.target.value)} />
        </li>

        {/* Download art */}
        <li>
          <button onClick={downloadCanvas}>
            Download
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </li>
      </ul>
    </section>
  );
};

export default ColorsWrapper;
