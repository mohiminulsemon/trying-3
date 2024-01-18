import React from 'react';
import useImage from 'use-image';
import { Image } from 'react-konva';
import { useSelector } from 'react-redux';

function CanvasImageV2({ imageElement }) {
  // ------------------------------------------------------------------------------
  // variables
  // ------------------------------------------------------------------------------
  const isSpaceKeyDown = useSelector((state) => state.hotKeyReducer.isSpaceKeyDown);

  const [img] = useImage(imageElement.src);
  // ------------------------------------------------------------------------------
  // functions
  // ------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------
  // render
  // ------------------------------------------------------------------------------
  return (
    <Image
      draggable={!isSpaceKeyDown}
      image={img}
      x={imageElement.x}
      y={imageElement.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
}

export default CanvasImageV2;



