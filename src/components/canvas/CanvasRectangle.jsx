import React from 'react';
import { Rect } from 'react-konva';
import { useSelector } from 'react-redux';

function CanvasRectangle({ rectElement }) {
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
    <Rect
      draggable={!isSpaceKeyDown}
      width={rectElement.width}
      height={rectElement.height}
      x={rectElement.x}
      y={rectElement.y}
      offsetX={rectElement.width / 2}
      offsetY={rectElement.height / 2}
      fill="red"
    />
  );
}

export default CanvasRectangle;
