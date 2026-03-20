// TypeScript doesn't care that PlayerType and GunType never explicitly say implements Rect.
//  As long as they have those 4 fields, they match.

type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const isOverlapping = (a: Rect, b: Rect): boolean => {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
};
