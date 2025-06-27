const canvas = document.getElementById("mCanvas");
const ctx = canvas.getContext("2d");

function drawMGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rowCount = 10;
  const canvasWidth = canvas.width;

  for (let row = 0; row < rowCount; row++) {
    const y = 60 + row * 60; // space lines

    let x = Math.random() * 40; // changed left to right

    while (x < canvasWidth - 50) {
      const fontSize = 20 + Math.floor(Math.random());
      const mCount = Math.floor(Math.random() * 5) + 1;

      const text = "M".repeat(mCount);
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = "black";

      ctx.fillText(text, x, y);

      x += mCount * fontSize + Math.random() * 200; // for next M
    }
  }
}
setInterval(drawMGrid, 500);