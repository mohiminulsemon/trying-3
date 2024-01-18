import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSpaceKeyDown } from '../../features/hotKeySlice';

function HotKeyController() {
  // ------------------------------------------------------------------------------
  // variables
  // ------------------------------------------------------------------------------
  const dispatch = useDispatch();

  const isSpaceKeyDown = useSelector((state) => state.hotKeyReducer.isSpaceKeyDown);

  // ------------------------------------------------------------------------------
  // functions
  // ------------------------------------------------------------------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      // check space key is down
      if (event.keyCode === 32) {
        dispatch(setIsSpaceKeyDown(true));
      }
    };

    const handleKeyUp = (event) => {
      // check space key is up
      if (event.keyCode === 32) {
        dispatch(setIsSpaceKeyDown(false));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isSpaceKeyDown]);
  // ------------------------------------------------------------------------------
  // render
  // ------------------------------------------------------------------------------
  return <React.Fragment></React.Fragment>;
}

export default HotKeyController;
