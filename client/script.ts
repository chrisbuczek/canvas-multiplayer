import { createGun, drawGun } from "./src/scripts/gun";
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
const guns = [createGun(300, 300)];

function gameLoop() {
  for (const player of players) {
    updatePlayerFromInput(player, keys);
    clampPlayerToCanvas(player, canvas);
  }
  for (const gun of guns) {
    updateGunFromInput(gun, keys);
  }

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const player of players) {
      drawPlayer(ctx, player);
    }
    for (const gun of guns) {
      drawGun(ctx, gun);
    }
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
