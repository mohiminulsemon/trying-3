import React from 'react';
import { useSelector } from 'react-redux';
import { Circle } from 'react-konva';

function CanvasCircleV2({ circleElement }) {
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
    <Circle
      draggable={!isSpaceKeyDown}
      radius={circleElement.radius}
      x={circleElement.x}
      y={circleElement.y}
      fill="blue"
    />
  );
}

export default CanvasCircleV2;
