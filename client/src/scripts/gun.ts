import gunImage from "../assets/gun.png";
import { BulletType, createBullet } from "./bullet";
import { PlayerType } from "./player";
import { DirectionEnum, DirectionEnumType } from "./types";
import { isOverlapping } from "./utils";
const img = new Image();
img.src = gunImage;

export type GunType = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number | null;
  damage: number;
  owner?: PlayerType | null;
  offset: number;
  direction: DirectionEnumType;
  fireRate: number;
};

export const createGun = (
  x = 50,
  y = 50,
  damage = 1,
  offset = 50,
  direction = DirectionEnum.right,
  fireRate = 500,
): GunType => ({
  x,
  y,
  width: 30,
  height: 30,
  damage: damage,
  offset: offset,
  direction: direction,
  fireRate: fireRate,
});

// export const updateGunFromInput = (
//   gun: GunType,
//   keys: Record<string, boolean>,
// ): BulletType | null => {
//   let lastShot = 0;
//   if (keys["Enter"] && gun.owner && Date.now() - lastShot > gun.fireRate) {
//     lastShot = Date.now();
//     return createBullet(100, gun);
//   }
//   return null;
// };

export const createGunInputHandler = () => {
  let lastShot = 0;

  return (gun: GunType, keys: Record<string, boolean>) => {
    if (keys["Enter"] && gun.owner && Date.now() - lastShot > gun.fireRate) {
      lastShot = Date.now();
      return createBullet(100, gun);
    }
    return null;
  };
};

export const tryPickupGun = (
  player: PlayerType,
  gun: GunType,
  keys: Record<string, boolean>,
): void => {
  if (isOverlapping(player, gun) && keys["e"] && !gun.owner) {
    gun.owner = player;
    gun.direction = player.direction;
  }
};

export const drawGun = (ctx: CanvasRenderingContext2D, gun: GunType) => {
  if (gun.owner) {
    if (gun.owner.direction === DirectionEnum.left) {
      ctx.save(); // allows to only scale the gun.owner, not the whole canvas
      ctx.scale(-1, 1);
      ctx.drawImage(
        img,
        -gun.owner.x - gun.owner.width + gun.offset,
        gun.owner.y + gun.offset,
        gun.width,
        gun.height,
      );
      ctx.restore();
    } else {
      ctx.drawImage(
        img,
        gun.owner.x + gun.offset,
        gun.owner.y + gun.offset,
        gun.width,
        gun.height,
      );
    }
  } else {
    ctx.drawImage(img, gun.x, gun.y, gun.width, gun.height);
  }
};
