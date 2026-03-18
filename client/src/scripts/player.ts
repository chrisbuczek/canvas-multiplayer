import playerImage from "../assets/player.png";
const img = new Image(); //equivalent to const img = document.createElement("img")
img.src = playerImage;

export type PlayerType = {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  health?: number;
};

export const createPlayer = (x = 50, y = 50, health = 100): PlayerType => ({
  x,
  y,
  width: 100,
  height: 100,
  speed: 5,
  health: health,
});

export const updatePlayerFromInput = (
  player: PlayerType,
  keys: Record<string, boolean>,
) => {
  if (keys["ArrowLeft"] || keys["a"]) {
    player.x -= player.speed;
  }
  if (keys["ArrowRight"] || keys["d"]) {
    player.x += player.speed;
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

export const drawPlayer = (
  ctx: CanvasRenderingContext2D,
  player: PlayerType,
) => {
  ctx.drawImage(img, player.x, player.y, player.width, player.height);
};
