const keys: { [key: string]: boolean } = {};
let isInitialized = false;

const inputManager = () => {
  // if (!isInitialized) {
  window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
  });

  window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });

  // isInitialized = true;
  // }

  return keys;
};

export default inputManager;
