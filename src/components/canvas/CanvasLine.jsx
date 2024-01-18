import React from 'react';
import { Line } from 'react-konva';
import { useSelector } from 'react-redux';

function CanvasLine({ lineElement }) {
  // ------------------------------------------------------------------------------
  // variables
  // ------------------------------------------------------------------------------
  const isSpaceKeyDown = useSelector((state) => state.hotKeyReducer.isSpaceKeyDown);
  // ------------------------------------------------------------------------------
  // functions
  // ------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------
  // render
  // ------------------------------------------------------------------------------
  return (
    <Line
      draggable={!isSpaceKeyDown}
      points={[0, 0, lineElement.distance, 0]}
      x={lineElement.x}
      y={lineElement.y}
      strokeWidth={lineElement.strokeWidth}
      stroke="orange"
    />
  );
}

export default CanvasLine;
