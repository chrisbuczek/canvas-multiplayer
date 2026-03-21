import { GunType } from "./gun";
import { DirectionEnum } from "./types";

export type BulletType = {
  x: number;
  y: number;
  width: number;
  height: number;
  velocity: number;
  gun: GunType;
};

export const createBullet = (velocity = 100, gun: GunType): BulletType => ({
  x: gun.owner.x + gun.offset + gun.width,
  y: gun.owner.y + gun.offset,
  width: 8,
  height: 8,
  velocity: velocity,
  gun: gun,
});

export const updateBullet = (bullet: BulletType) => {
  if (bullet.gun.direction == DirectionEnum.right) {
    bullet.x += bullet.velocity;
  } else {
    bullet.x -= bullet.velocity;
  }
};

export const drawBullet = (
  ctx: CanvasRenderingContext2D,
  bullet: BulletType,
) => {
  ctx.fillStyle = "yellow";
  ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
};
