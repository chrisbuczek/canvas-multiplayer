const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

console.log("hello");

function gameLoop() {
  if (ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 100, 100);
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
