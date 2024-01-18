import html2canvas from 'html2canvas';
import saveAs from 'file-saver';

export const saveCanvasAsImage = async (format, canvasImage) => {
console.log(canvasImage)


  try {
    // const canvasImage = await html2canvas(document.getElementById('canvas-area'));
    // console.log('Captured canvas image:', canvasImage);

    if (format === 'png') {
      // saveAs(canvasImage.toDataURL('image/png'), 'canvas_image.png');
    } else if (format === 'jpg') {
      saveAs(canvasImage.toDataURL('image/jpeg'), 'canvas_image.jpg');
    } else if (format === 'svg') {
      // ... handle SVG format
    } else if (format === 'pdf') {
      // ... handle PDF format
    } else if (format === 'html') {
      // ... handle HTML format
    }
  } catch (error) {
    console.error('Error saving canvas as image:', error);
  }
};

// ... other imports

// export const saveCanvasAsImage = async (format, canvasData) => {
//   try {
//     if (format === 'png') {
//       saveAs(canvasData, 'canvas_image.png');
//       // ... other formats as needed
//     } else {
//       console.warn('Unsupported format:', format);
//     }
//   } catch (error) {
//     console.error('Error saving canvas as image:', error);
//   }
// };
