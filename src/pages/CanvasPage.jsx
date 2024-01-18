import React from 'react';
import { CanvasContentHeader, CanvasScaleButton, CanvasV3, HotKeyController } from '../components';

import { useSelector } from 'react-redux';

function CanvasPage() {
  const canvas = useSelector((state) => state.persist.canvasReducer.canvas);

  const canvasContentWidth = useSelector((state) => state.persist.canvasReducer.canvasContentWidth);
  const canvasContentHeight = useSelector(
    (state) => state.persist.canvasReducer.canvasContentHeight
  );

  return (
    <div className=" w-full h-full rounded-sm relative">
      {/* header */}
      <div className="w-full">
        <CanvasContentHeader />
      </div>
      <HotKeyController />

      {/* content h-[calc(100vh-61px)]*/}
      {canvas.length > 0 && (
        <div className="dark:bg-zinc-900 bg-zinc-300 w-full h-auto">
          <CanvasV3 width={canvasContentWidth} height={canvasContentHeight} />
        </div>
      )}

      {/* scale button */}
      <div className="w-full absolute bottom-[20px] flex justify-center">
        <CanvasScaleButton />
      </div>
    </div>
  );
}

export default CanvasPage;
