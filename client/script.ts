import { drawBullet, BulletType } from "./src/scripts/bullet";
import {
  createGun,
  drawGun,
  tryPickupGun,
  updateGunFromInput,
} from "./src/scripts/gun";
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
const bullets: BulletType[] = [];

function gameLoop() {
  for (const player of players) {
    updatePlayerFromInput(player, keys);
    clampPlayerToCanvas(player, canvas);
  }
  for (const gun of guns) {
    const bullet = updateGunFromInput(gun, keys);
    if (bullet) bullets.push(bullet);
    for (const player of players) {
      tryPickupGun(player, gun, keys);
    }
  }
  console.log("bullets", bullets);

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const player of players) {
      drawPlayer(ctx, player);
    }
    for (const gun of guns) {
      drawGun(ctx, gun);
    }
    for (const bullet of bullets) {
      drawBullet(ctx, bullet);
    }
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
