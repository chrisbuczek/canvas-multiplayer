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

const players = [createPlayer(50, 50)];

function gameLoop() {
  for (const player of players) {
    updatePlayerFromInput(player, keys);
    clampPlayerToCanvas(player, canvas);
  }

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const player of players) {
      drawPlayer(ctx, player);
    }
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
