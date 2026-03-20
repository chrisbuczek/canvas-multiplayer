import { GunType } from "./gun";

export type BulletType = {
  x: number;
  y: number;
  width: number;
  height: number;
  velocity: number;
  gun: GunType;
};

export const createBullet = (velocity = 100, gun): BulletType => ({
  x: gun.owner.x + gun.offset + gun.width,
  y: gun.owner.y + gun.offset,
  width: 8,
  height: 8,
  velocity: velocity,
  gun: gun,
});

export const drawBullet = (
  ctx: CanvasRenderingContext2D,
  bullet: BulletType,
) => {
  ctx.fillStyle = "yellow";
  ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
};
