<!-- QUESTION 1 -->

1. Why use Express package instead of Node.js Built-in without any dependencies?

**What is Express?**
Express is a helper library for Node.js that makes building web servers much easier.
Think of it like this: Node.js gives you raw tools to build a car engine from scratch,
while Express gives you a pre-built engine that just works.

**What does a web server do?**
When you type "localhost:3000" in your browser, the browser asks the server:
"Hey, can I have the index.html file?"
The server needs to find that file and send it back.

**Without Express (raw Node.js):**
You have to manually:

- Read the file from disk
- Figure out what type of file it is (HTML? JavaScript? Image?)
- Handle errors if file doesn't exist
- Protect against hackers trying to access system files
- Write 20-30 lines of code just to serve one file

**With Express:**

```javascript
app.use(express.static("public")); // That's it! One line.
```

Express handles all the hard stuff automatically.

**Why we need it for our game:**

1. Serves our HTML page to the browser
2. Serves our JavaScript game code
3. Later, Socket.IO (for multiplayer) plugs directly into Express

<!-- QUESTION 2 -->

2. What is the difference between 'npx tsc index.ts' and 'npx ts-node index.ts'?

**`npx tsc index.ts`** - Compiles TypeScript → JavaScript file, then you run it separately with `node index.js`

**`npx ts-node index.ts`** - Compiles AND runs in one step (no .js file created)

| Command   | Output                  | Use case            |
| --------- | ----------------------- | ------------------- |
| `tsc`     | Creates .js file        | Production builds   |
| `ts-node` | Runs directly in memory | Development/testing |

<!-- QUESTION 3 -->

3. What is nodemon?

**Nodemon** = "Node Monitor" - automatically restarts your server when you save file changes.

**Without nodemon:**

1. Edit code
2. Stop server (Ctrl+C)
3. Run `node index.js` again
4. Repeat 100 times a day 😫

**With nodemon:**

1. Edit code
2. Save → server auto-restarts ✅

```bash
nodemon index.js      # instead of: node index.js
```

It watches your files and restarts automatically - saves tons of time during development.

<!-- QUESTION 4  -->

4. Why typescript doesn't recognize: const canvas = document.getElementById("canvas"); as HTMLCanvasElement?

TypeScript only sees the method signature - it doesn't actually run your code to check what's in the HTML. It has no way to know that "canvas" refers to a <canvas> element vs a <div> or <span>.

- You asked for an element by ID → could be any HTML element
- Returns the most general type: HTMLElement | null
- HTMLElement doesn't have getContext() - only HTMLCanvasElement does

<!-- QUESTION 5 -->

5. Script.ts file cannot be imported in index.html
   Your HTML references script.js but you only have script.ts. Browsers can't run TypeScript directly - it needs to be compiled to JavaScript first.

Compile the TypeScript:
npx tsc public/script.ts

Setup watcher:
npx tsc public/script.ts --watch

(Best solution) Install bundler like Vite or Webpack.
