import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { canvasElementType } from '../../utils/constants';
import { setDraggingElement } from '../../features/canvasSlice';
import rectSvg from '../../assets/shapes/rect.svg';
import triangleSvg from '../../assets/shapes/triangle.svg';
import polygonSvg from '../../assets/shapes/pentagon.svg';
import circleSvg from '../../assets/shapes/circle.svg';
import lineSvg from '../../assets/shapes/line.svg';
import textSvg from '../../assets/shapes/text.svg';
import imageLion from '../../assets/shapes/lion.png';

function CanvasOtherModal() {
  // ------------------------------------------------------------------------------
  // variables
  // ------------------------------------------------------------------------------
  const dispatch = useDispatch();

  const isSpaceKeyDown = useSelector((state) => state.hotKeyReducer.isSpaceKeyDown);
  const isDarkMode = useSelector((state) => state.persist.appReducer.isDarkMode);
  // ------------------------------------------------------------------------------
  // functions
  // ------------------------------------------------------------------------------
  const handleImageDrag = (event) => {
    const element = {
      type: canvasElementType.image,
      src: event.target.src
    };
    dispatch(setDraggingElement(element));
  };

  const handleRectDrag = (event) => {
    const element = {
      type: canvasElementType.rectangle,
      width: 100,
      height: 100
    };
    dispatch(setDraggingElement(element));
  };

  const handleTriangleDrag = (event) => {
    const element = {
      type: canvasElementType.triangle,
      width: 100,
      height: 100
    };
    dispatch(setDraggingElement(element));
  };

  const handlePolygonDrag = (event) => {
    const element = {
      type: canvasElementType.polygon,
      width: 150,
      height: 150,
      sides: 5
    };
    dispatch(setDraggingElement(element));
  };

  const handleCircleDrag = (event) => {
    const element = {
      type: canvasElementType.circle,
      radius: 140
    };
    dispatch(setDraggingElement(element));
  };

  const handleLineDrag = (event) => {
    const element = {
      type: canvasElementType.line,
      distance: 180,
      strokeWidth: 5
    };
    dispatch(setDraggingElement(element));
  };

  const handleTextDrag = (event) => {
    const element = {
      type: canvasElementType.text,
      text: 'Simple Text Hello',
      fontSize: 30
    };
    dispatch(setDraggingElement(element));
  };

  // ------------------------------------------------------------------------------
  // render
  // ------------------------------------------------------------------------------
  return (
    <div className="w-full h-full bg-zinc-200 dark:bg-zinc-600">
      <div className="w-full flex flex-wrap gap-2 p-2">
        {/* rect icon */}
        <div className="flex justify-center items-center  w-[80px] h-[80px]">
          <img
            onDragStart={handleRectDrag}
            draggable
            className="w-full h-full"
            src={rectSvg}
            alt=""
          />
        </div>

        {/* triangle icon */}
        <div className="flex justify-center items-center  w-[80px] h-[80px]">
          <img
            onDragStart={handleTriangleDrag}
            draggable
            className="w-full h-full "
            src={triangleSvg}
            alt=""
          />
        </div>

        {/* polygon icon */}
        <div className="flex justify-center items-center  w-[80px] h-[80px]">
          <img
            onDragStart={handlePolygonDrag}
            draggable
            className="w-[80px] h-[80px]"
            src={polygonSvg}
            alt=""
          />
        </div>

        {/* circle icon */}
        <div className="flex justify-center items-center  w-[80px] h-[80px]">
          <img
            onDragStart={handleCircleDrag}
            draggable
            className="w-full h-full"
            src={circleSvg}
            alt=""
          />
        </div>

        {/* line icon */}
        <div className="flex justify-center items-center  w-[80px] h-[80px]">
          <img
            onDragStart={handleLineDrag}
            draggable
            className="w-full h-full"
            src={lineSvg}
            alt=""
          />
        </div>

        {/* text icon */}
        <div className="flex justify-center items-center  w-[80px] h-[80px]">
          <img
            onDragStart={handleTextDrag}
            draggable
            className="w-[70px] h-[70px]"
            src={textSvg}
            alt=""
          />
        </div>

        {/* img icon */}
        <div className="w-[80px] h-[80px]  flex justify-center items-center">
          <img
            onDragStart={handleImageDrag}
            alt="lion"
            src={imageLion}
            draggable
          />
        </div>
      </div>
      <div className="w-[150px] h-[150px] bg-yellow-300 flex justify-center items-center mt-2">
        space key down ?
        <br />
        {isSpaceKeyDown ? 'true' : 'false'}
      </div>

      {`Hi,\nCurtis!`}
    </div>
  );
}

export default CanvasOtherModal;
