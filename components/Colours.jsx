import React from 'react';

const ColorsWrapper = ({ selectColor, eraser, clearCanvas, penSizeChanging, pickedColorChange, color, penSize }) => {
  const downloadCanvas = () => {
    const canvas = document.querySelector('#canvas'); // Get the canvas element
    const image = canvas.toDataURL('image/png'); // Convert the canvas content to a data URL
    const link = document.createElement('a'); // Create a link element
    link.download = 'paint.png'; // Set the download attribute with the desired filename
    link.href = image; // Set the data URL as the link's href
    link.click(); // Programmatically trigger the download
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
            <i className="fa-solid fa-eraser"></i>
          </button>
        </li>

        {/* Clear canvas */}
        <li>
          <button onClick={clearCanvas}>
            <i className="fa-solid fa-trash"></i>
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
            <i className="fa-solid fa-download fa-lg"></i>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default ColorsWrapper;
