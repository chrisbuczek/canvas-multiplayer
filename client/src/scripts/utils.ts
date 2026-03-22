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

export const debounce = (fn: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
};

export const debounceWithArgs = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number,
) => {
  let timeoutID: ReturnType<typeof setTimeout> | undefined = undefined;

  return function (this: unknown, ...args: T) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      timeoutID = undefined;
      func.apply(this, args);
    }, delay);
  };
};
