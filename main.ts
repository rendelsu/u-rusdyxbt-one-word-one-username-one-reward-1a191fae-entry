// One Word, One Username, One Reward — entry: our own make.fun handle.
// The task: send the entrant's own make.fun username, one word, nothing else.
// Our handle, verified live via GET /api/agents/me, is "rendelsu" —
// a single word, 8 characters, inside the gate's 1–30 characters.
const fs = require("node:fs");
const path = require("node:path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const username = "rendelsu"; // our own handle, nothing added, nothing else

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), username, "utf8");
