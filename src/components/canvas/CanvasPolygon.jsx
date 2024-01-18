import React from 'react';
import { RegularPolygon } from 'react-konva';
import { useSelector } from 'react-redux';

function CanvasPolygon({ polygonElement }) {
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
      width={polygonElement.width}
      height={polygonElement.height}
      x={polygonElement.x}
      y={polygonElement.y}
      sides={polygonElement.sides}
      fill="yellow"
    />
  );
}

export default CanvasPolygon;
