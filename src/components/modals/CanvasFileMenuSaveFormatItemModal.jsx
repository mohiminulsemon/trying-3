import React, { useRef } from 'react';
import { CanvasMenuItemButton } from '..';
import { saveCanvasAsImage } from '../../features/saveCanvasAsImage';
import { useDispatch, useSelector } from 'react-redux';

function CanvasFileMenuSaveFormatItemModal() {
  const dispatch = useDispatch();
  const canvasData = useSelector((state) => state.persist.canvasReducer.selectedCanvas);
  const currentStage = useSelector((state) => state.persist.canvasReducer.currentStage);
  // console.log ( 'current stage from file menu :>> ', currentStage);
  // console.log(canvasData)

  // const stageRef = useRef(null);
  // const canvasImage = stageRef.current.toDataURL({ pixelRatio: 2 });


  // Function to handle save button click
  const handleSaveClick = (format) => {
    // Dispatch an action or call a function to save the canvas in the selected format
    // console.log('Save format:', format);
    saveCanvasAsImage(format, canvasData);
 
  };

  const handleSaveCanvas = () => {
    const canvas = currentStage.toCanvas();
    console.log('canvas :>> ', canvas);
    const link = document.createElement('a');
    link.href = canvas.toDataURL({ mimeType: 'image/jpeg' });  // Specify JPG format
    link.download = 'canvas-image.jpg';  // Set JPG filename
    link.click();
  }
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800">
      <p onClick={() => handleSaveCanvas()}>SAVE</p>
      <CanvasMenuItemButton onClick={() => handleSaveClick('png')} leftLable=".PNG" />
      <CanvasMenuItemButton onClick={() => handleSaveClick('jpg')} leftLable=".JPG" />
      <CanvasMenuItemButton onClick={() => handleSaveClick('svg')} leftLable=".SVG" />
      <CanvasMenuItemButton onClick={() => handleSaveClick('pdf')} leftLable=".PDF" />
      <CanvasMenuItemButton onClick={() => handleSaveClick('html')} leftLable=".HTML" />
    </div>
  );
}

export default CanvasFileMenuSaveFormatItemModal;
