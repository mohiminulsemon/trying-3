import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { Circle, Group, Layer, Rect, Shape, Stage, Text, RegularPolygon, Line } from 'react-konva';
import {
  CanvasCircleV2,
  CanvasImageV2,
  CanvasLine,
  CanvasPolygon,
  CanvasRectangle,
  CanvasTextV3,
  CanvasTriangle
} from '..';
import { useSelector, useDispatch } from 'react-redux';
import { canvasElementType } from '../../utils/constants';
import { addPoints, scalePoint, subtractPoints } from '../../utils/canvas';
import { setDraggingElement, updateCanvas , setcurrentStage } from '../../features/canvasSlice';

function CanvasV3({ width, height }) {
  // ------------------------------------------------------------------------------
  // variables
  // ------------------------------------------------------------------------------
  const canvasWidth = 500;
  const canvasHeight = 500;
  const scale = 0.8;

  console.log( 'width and height :>> ', width, height);

  const dispatch = useDispatch();

  const isSpaceKeyDown = useSelector((state) => state.hotKeyReducer.isSpaceKeyDown);
  const draggingElement = useSelector((state) => state.persist.canvasReducer.draggingElement);
  const canvasList = useSelector((state) => state.persist.canvasReducer.canvas);
  const selectedCanvasID = useSelector((state) => state.persist.canvasReducer.selectedCanvasID);

  const [selectedCanvas, setSelectedCanvas] = useState(null);
  const [canvasElements, setCanvasElements] = useState([]);

  // const [stageOffset, setStageOffset] = useState({
  //   x: width / 2 - canvasWidth / 2,
  //   y: height / 2 - canvasHeight / 2
  // });

  const stageRef = useRef();
  const layerRef = useRef();
  const lastStagePosition = useRef({ x: 0, y: 0 });
  const selectedCanvasRef = useRef();


  const currentStage = useSelector((state) => state.persist.canvasReducer.currentStage);
  // ------------------------------------------------------------------------------
  // functions
  // ------------------------------------------------------------------------------
  const handleStageDragStart = (event) => {
    lastStagePosition.current = {
      x: event.currentTarget.attrs.x,
      y: event.currentTarget.attrs.y
    };
  };

  const handleStageDragEnd = (event) => {
    console.log('stage drag end');
    console.log(event.currentTarget);
    const canvas = {
      ...selectedCanvas,
      x: event.currentTarget.attrs.x - selectedCanvas.width / 2,
      y: event.currentTarget.attrs.y - selectedCanvas.height / 2
    };

    console.log('event.currentTarget.attrs :>> ', event.currentTarget);
    setSelectedCanvas(canvas);
    dispatch(updateCanvas(canvas));

    // setStageOffset({ x: event.currentTarget.attrs.x, y: event.currentTarget.attrs.y });
  };

  const handleZoom = (event) => {
    console.log('event :>> ', event);
    console.log('event.evt.wheelDelta :>> ', event.evt.wheelDelta);

    const deltaScale = event.evt.wheelDelta / 1000;

    const updatedCanvas = {
      ...selectedCanvas,
      scale: selectedCanvas.scale + deltaScale
    };

    setSelectedCanvas(updatedCanvas);
    dispatch(updateCanvas(updatedCanvas));
  };

  const handleElementDrop = (event) => {
    event.preventDefault();

    // if draggingElement is an empty object
    // skip the procedure
    if (Object.keys(draggingElement) == 0) return;

    console.log('event :>> ', event);
    // calc the element position
    stageRef.current.setPointersPositions(event);

    const pointerPosition = stageRef.current.getPointersPositions();
    console.log('pointerPosition :>> ', pointerPosition);

    console.log('stageRef.current :>> ', stageRef.current);
    let stagePosition = { x: stageRef.current.attrs.x, y: stageRef.current.attrs.y };
    let stageOffset = { x: stageRef.current.attrs.offsetX, y: stageRef.current.attrs.offsetY };
    let layerPosition = {
      x: width / 2 - selectedCanvas?.width / 2,
      y: height / 2 - selectedCanvas?.height / 2
    };

    console.log('layerRef.current.attrs :>> ', layerRef.current.attrs);
    stagePosition = scalePoint(stagePosition, selectedCanvas.scale);
    console.log('layerPosition :>> ', layerPosition);
    // layerPosition = scalePoint(layerPosition, selectedCanvas.scale);
    // console.log('lastStagePosition :>> ', lastStagePosition);
    // console.log('layerRef.current :>> ', layerRef.current);

    console.log('pointerPosition[0].x :>> ', pointerPosition[0].x);
    console.log('pointerPosition[0].y :>> ', pointerPosition[0].y);
    let elementPosition = {
      x: pointerPosition[0].x,
      y: pointerPosition[0].y
    };

    elementPosition = scalePoint(elementPosition, selectedCanvas.scale);
    elementPosition.x = elementPosition.x - stagePosition.x + stageOffset.x;
    elementPosition.y = elementPosition.y - stagePosition.y + stageOffset.y;

    console.log('elementPosition :>> ', elementPosition);

    // prepare a canvas element
    const element = {
      ...draggingElement,
      ...elementPosition
    };

    console.log('element :>> ', element);
    setCanvasElements([...canvasElements, element]);

    dispatch(setDraggingElement({}));
    // console.log(element);
    // console.log(stageRef.current.getPointersPositions());
  };

  useLayoutEffect(() => {
    console.log(selectedCanvasID);
    setSelectedCanvas(canvasList.find((c) => c.id == selectedCanvasID));
  
    console.log('stageRef :>> ', stageRef);
    console.log('stageRef  Images:>> ', stageRef.current);
  
    // Use stageRef directly in dispatch without trying to update its current property
    dispatch(setcurrentStage(stageRef.current));
  
    console.log('canvas :>> ', canvasList);
  }, [selectedCanvasID,currentStage]);
  




  // ------------------------------------------------------------------------------
  // render
  // ------------------------------------------------------------------------------
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleElementDrop}
      className={isSpaceKeyDown ? 'cursor-grab' : ''}
    >
      <Stage
        onWheel={handleZoom}
        draggable={isSpaceKeyDown}
        on
        onDragEnd={handleStageDragEnd}
        onDragStart={handleStageDragStart}
        width={width}
        height={height}
        x={selectedCanvas?.x + selectedCanvas?.width / 2}
        y={selectedCanvas?.y + selectedCanvas?.height / 2}
        // x={0}
        // y={0}
        // offsetX={120}
        // offsetY={120}
        offsetX={selectedCanvas?.width / 2}
        offsetY={selectedCanvas?.height / 2}
        ref={stageRef}
        showWarnings={false}
        scale={{ x: selectedCanvas?.scale ?? 1, y: selectedCanvas?.scale ?? 1 }}
        className="dark:bg-zinc-900 bg-zinc-300"
      >
        <Layer ref={layerRef}>
          <Rect width={selectedCanvas?.width} height={selectedCanvas?.height} fill="white" />

          <Circle draggable={!isSpaceKeyDown} radius={50} x={200} y={300} fill="green" />

          <Rect draggable={!isSpaceKeyDown} width={400} height={100} x={50} y={50} fill="red" />

          {canvasElements.map((element, index) => {
            if (element.type == canvasElementType.image) {
              return <CanvasImageV2 key={index} imageElement={element} />;
            } else if (element.type == canvasElementType.rectangle) {
              return <CanvasRectangle key={index} rectElement={element} />;
            } else if (element.type == canvasElementType.triangle) {
              return <CanvasTriangle key={index} triangleElement={element} />;
            } else if (element.type == canvasElementType.polygon) {
              return <CanvasPolygon key={index} polygonElement={element} />;
            } else if (element.type == canvasElementType.circle) {
              return <CanvasCircleV2 key={index} circleElement={element} />;
            } else if (element.type == canvasElementType.line) {
              return <CanvasLine key={index} lineElement={element} />;
            } else if (element.type == canvasElementType.text) {
              return <CanvasTextV3 key={index} textElement={element} />;
            }
          })}
          {/* <CanvasRectangle /> */}
        </Layer>
      </Stage>
    </div>
  );
}

export default CanvasV3;
