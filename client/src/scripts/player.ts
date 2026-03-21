import playerImage from "../assets/player.png";
import { DirectionEnum, DirectionEnumType } from "./types";

export type PlayerType = {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  health?: number;
  direction: DirectionEnumType;
};

export const createPlayer = (
  x = 50,
  y = 50,
  health = 100,
  direction: DirectionEnumType = DirectionEnum.right,
): PlayerType => ({
  x,
  y,
  width: 100,
  height: 100,
  speed: 5,
  health: health,
  direction: direction,
});

export const updatePlayerFromInput = (
  player: PlayerType,
  keys: Record<string, boolean>,
) => {
  if (keys["ArrowLeft"] || keys["a"]) {
    player.x -= player.speed;
    player.direction = DirectionEnum.left;
  }
  if (keys["ArrowRight"] || keys["d"]) {
    player.x += player.speed;
    player.direction = DirectionEnum.right;
  }
  if (keys["ArrowUp"] || keys["w"]) {
    player.y -= player.speed;
  }
  if (keys["ArrowDown"] || keys["s"]) {
    player.y += player.speed;
  }
};

export const clampPlayerToCanvas = (
  player: PlayerType,
  canvas: HTMLCanvasElement,
) => {
  player.x = Math.max(0, Math.min(player.x, canvas.width - player.width));
  player.y = Math.max(0, Math.min(player.y, canvas.height - player.height));
};

const img = new Image(); //equivalent to const img = document.createElement("img")
img.src = playerImage;
export const drawPlayer = (
  ctx: CanvasRenderingContext2D,
  player: PlayerType,
) => {
  if (player.direction === "left") {
    ctx.save(); // allows to only scale the player, not the whole canvas
    ctx.scale(-1, 1);
    ctx.drawImage(
      img,
      -player.x - player.width,
      player.y,
      player.width,
      player.height,
    );
    ctx.restore();
  } else {
    ctx.drawImage(img, player.x, player.y, player.width, player.height);
  }
};
