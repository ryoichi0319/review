import React, { useRef } from 'react';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      // 画像をキャンバスに描画するなどの加工処理を行います
      // ここでは簡単のために例として、画像を描画するだけとします
      const img = new Image();
      img.onload = () => {
        const maxWidth = 2 * 1024 * 1024;
        let width = img.width;
        let height = img.height;
         // ファイルサイズが最大サイズを超える場合に、リサイズ
      if ((width * height * 4) > maxWidth) {
        const ratio = Math.sqrt(maxWidth / (width * height * 4));
        width *= ratio;
        height *= ratio;
      }
        canvas.width = width;
      canvas.height = height;
        context?.drawImage(img, 0,0,100,100);
        // 加工した画像をダウンロードさせる
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'processed_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      img.src = '/Amnesiac.jpg'; // 画像のURLを指定して読み込みます
    }
  };
  //コールバック
//   function greeting(name:any) {
    
//     alert(`Hello, ${name}`);
//   }
//   const  processUserInput = (callback:any) =>  {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);

// function testFunc(callback:any) {
//     console.log('testFuncが実行されました');
//     callback();
// }
  
// function myCallback(name:any) {
//    console.log('こんにちは、' + name + 'さん！');
// }

// testFunc(myCallback);


  return (
    <div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={handleDownload}>画像をダウンロード</button>
    </div>
  );
};

export default Canvas;
