const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 300, 300);
// マウス判定
let mouseDown = false;
// 最初のマウス位置
let beforeMousePos = {};

//描画の開始
function startDraw(event) {
  mouseDown = true;
  beforeMousePos = {
    x: event.clientX - canvas,
    y: event.clientY
  };
};

function Draw(event) {
  //マウスボタンが押されていれば描画
  if (mouseDown) {
    const canvasRect = canvas.getBoundingClientRect();
    const currentPos = {
      x: event.clientX - canvasRect.left,
      y: event.clientY - canvasRect.top
    };
    //マウスの座標(終点）を取得
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.moveTo(beforeMousePos.x, beforeMousePos.y);
    ctx.lineTo(currentPos.x, currentPos.y);
    ctx.lineCap = "round";
    ctx.stroke();
    beforeMousePos = { x: currentPos.x, y: currentPos.y };
  }
}

//描画の終了
function endDraw() {
  mouseDown = false;
}