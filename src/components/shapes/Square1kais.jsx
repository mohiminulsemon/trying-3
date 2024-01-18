// components/shapes/Square.jsx
import React from 'react';
import { CanvasElementContainer } from '..';
import { useDispatch } from 'react-redux';
import { setAllElementSelected, updateCanvasElement } from '../../features/canvasSlice';
function Square({ element }) {
  // ------------------------------------------------------------------------------
  // variables
  // ------------------------------------------------------------------------------
  const dispatch = useDispatch();

  // ------------------------------------------------------------------------------
  // functions
  // ------------------------------------------------------------------------------
  const handleSelect = (value) => {
    console.log('Square element clicked');
    let updatedElement = {
      ...element
    };

    dispatch(setAllElementSelected(false));

    updatedElement.selected = value;
    dispatch(updateCanvasElement(updatedElement));
  };

  // ------------------------------------------------------------------------------
  // render
  // ------------------------------------------------------------------------------

  return (
    <CanvasElementContainer element={element}>
      <div onClick={() => handleSelect(true)} className="w-full h-full bg-green-300"></div>
    </CanvasElementContainer>
  );
}

Square.defaultConfig = {
  type: 'Square',
  size: 60,
  left: 10,
  top: 10
};

export default Square;
