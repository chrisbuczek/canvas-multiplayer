import gunImage from "../assets/gun.png";
import { PlayerType } from "./player";
const img = new Image();

export type GunType = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number | null;
  damage: number;
  owner?: PlayerType | null;
};

export const createGun = (x = 50, y = 50, damage = 1): GunType => ({
  x,
  y,
  width: 30,
  height: 30,
  damage: damage,
});

export const updateGunFromInput = (gun: GunType, keys: Record<string, boolean>) => {
    if(keys['MouseLeft']) {
        //shoot gun - create bullet
    }

}

export const drawGun = (ctx: CanvasRenderingContext2D, gun: GunType) => {
  ctx.drawImage(img, gun.x, gun.y, gun.width, gun.height);
};
