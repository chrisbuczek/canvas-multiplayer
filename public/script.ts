const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

console.log("hello");

while (true) {
  if (ctx) {
    ctx.fillStyle = "red"; // Set color
    ctx.fillRect(50, 50, 100, 100); // x, y, width, height
  }
}
