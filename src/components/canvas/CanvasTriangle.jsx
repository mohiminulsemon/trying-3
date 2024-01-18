import React from 'react';
import { useSelector } from 'react-redux';
import { RegularPolygon } from 'react-konva';

function CanvasTriangle({ triangleElement }) {
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
    <RegularPolygon
      draggable={!isSpaceKeyDown}
      width={triangleElement.width}
      height={triangleElement.height}
      sides={3}
      x={triangleElement.x}
      y={triangleElement.y}
      //   offsetX={triangleElement.width / 2}
      //   offsetY={triangleElement.height / 2}
      fill="green"
    />
  );
}

export default CanvasTriangle;
