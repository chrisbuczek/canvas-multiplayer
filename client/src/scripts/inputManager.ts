const keys: { [key: string]: boolean } = {};
//Record<string, boolean>

const mouseButtonNames: Record<number, string> = {
  0: "MouseLeft",
  1: "MouseMiddle",
  2: "MouseRight",
} as const;

const inputManager = () => {
  window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
  });

  window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });

  window.addEventListener("mousedown", (e) => {
    const name = mouseButtonNames[e.button];
    if (name) keys[name] = true;
  });

  window.addEventListener("mouseup", (e) => {
    const name = mouseButtonNames[e.button];
    if (name) keys[name] = false;
  });

  return keys;
};

export default inputManager;
