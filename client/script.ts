import inputManager from "./src/scripts/inputManager";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const keys = inputManager();

const playerVelocity = 5;
let playerPositionX = 50;
let playerPositionY = 50;
function gameLoop() {
  if (keys["ArrowLeft"] || keys["a"]) {
    playerPositionX -= playerVelocity;
  }
  if (keys["ArrowRight"] || keys["d"]) {
    playerPositionX += playerVelocity;
  }
  if (keys["ArrowUp"] || keys["w"]) {
    playerPositionY -= playerVelocity;
  }
  if (keys["ArrowDown"] || keys["s"]) {
    playerPositionY += playerVelocity;
  }

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(playerPositionX, playerPositionY, 100, 100);
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
