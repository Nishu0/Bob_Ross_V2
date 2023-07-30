import React, { useRef, useEffect, useState } from 'react';

const CanvasComponent = React.forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const { width, height, color, penSize } = props;
  const [ctx, setCtx] = useState(null);
  const [isCtxReady, setIsCtxReady] = useState(false);
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    setCtx(context);
    setIsCtxReady(true);
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

    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  const clearCanvas = () => {
    if (isCtxReady) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  };

  const downloadCanvas = () => {
    if (isCtxReady) {
      const canvas = canvasRef.current;
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'canvas_image.png';
      link.href = image;
      link.click();
    }
  };

  return (
    <div>
      <canvas
        ref={(canvas) => {
          canvasRef.current = canvas;
          if (ref) {
            ref.current = {
              clearCanvas: clearCanvas,
              downloadCanvas: downloadCanvas,
            };
          }
        }}
        width={width}
        height={height}
        onMouseDown={start}
        onMouseUp={finish}
        onMouseMove={draw}
        style={{
          border: '2px solid #000',
          borderRadius: '8px',
          backgroundColor: '#000',
        }}
      />
    </div>
  );
});

export default CanvasComponent;
