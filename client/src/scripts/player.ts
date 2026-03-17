export type Player = {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  color: string;
};

export const createPlayer = (x = 50, y = 50, color = "red"): Player => ({
  x,
  y,
  width: 100,
  height: 100,
  speed: 5,
  color: color,
});

export const updatePlayerFromInput = (
  player: Player,
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
  player: Player,
  canvas: HTMLCanvasElement,
) => {
  player.x = Math.max(0, Math.min(player.x, canvas.width - player.width));
  player.y = Math.max(0, Math.min(player.y, canvas.height - player.height));
};

export const drawPlayer = (ctx: CanvasRenderingContext2D, player: Player) => {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
};
