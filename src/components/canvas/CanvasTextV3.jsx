import React from 'react';
import { Text } from 'react-konva';
import { useSelector } from 'react-redux';

function CanvasTextV3({ textElement }) {
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
    <Text
      draggable={!isSpaceKeyDown}
      x={textElement.x}
      y={textElement.y}
      text={textElement.text}
      fontSize={textElement.fontSize}
      fill="pink"
    />
  );
}

export default CanvasTextV3;
