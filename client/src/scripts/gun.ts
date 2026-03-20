import gunImage from "../assets/gun.png";
import { BulletType, createBullet } from "./bullet";
import { PlayerType } from "./player";
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
};

export const createGun = (
  x = 50,
  y = 50,
  damage = 1,
  offset = 50,
): GunType => ({
  x,
  y,
  width: 30,
  height: 30,
  damage: damage,
  offset: offset,
});

export const updateGunFromInput = (
  gun: GunType,
  keys: Record<string, boolean>,
): BulletType | null => {
  if (keys["Enter"] && gun.owner) {
    console.log("I'm in!");
    //shoot gun - create bullet
    // can I send events like in unity event system? gun knows player. bullet know gun. But what if gun wants to shoot a bullet
    // createBullet()
    return createBullet(100, gun);
  }
  return null;
};

export const tryPickupGun = (
  player: PlayerType,
  gun: GunType,
  keys: Record<string, boolean>,
): void => {
  if (isOverlapping(player, gun) && keys["e"] && !gun.owner) {
    gun.owner = player;
  }
};

export const drawGun = (ctx: CanvasRenderingContext2D, gun: GunType) => {
  if (gun.owner) {
    ctx.drawImage(
      img,
      gun.owner.x + gun.offset,
      gun.owner.y + gun.offset,
      gun.width,
      gun.height,
    );
  } else {
    ctx.drawImage(img, gun.x, gun.y, gun.width, gun.height);
  }
};
