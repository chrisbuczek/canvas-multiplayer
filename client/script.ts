import inputManager from "./src/scripts/inputManager";
import {
  clampPlayerToCanvas,
  createPlayer,
  drawPlayer,
  updatePlayerFromInput,
} from "./src/scripts/player";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const keys = inputManager();

const player = createPlayer(50, 50);
const player2 = createPlayer(400, 400, "green");
function gameLoop() {
  updatePlayerFromInput(player, keys);
  clampPlayerToCanvas(player, canvas);
  updatePlayerFromInput(player2, keys);
  clampPlayerToCanvas(player2, canvas);

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer(ctx, player);
    drawPlayer(ctx, player2);
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
