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

<!-- QUESTION 3 -->
3. What is nodemon?