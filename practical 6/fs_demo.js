const fs = require("fs");

// 1. Create file
fs.writeFileSync("data.txt", "Hello, this is initial content\n");

// 2. Read file
const data = fs.readFileSync("data.txt", "utf-8");
console.log("File Content:\n", data);

// 3. Append data
fs.appendFileSync("data.txt", "This is appended content\n");

// 4. Delete file (uncomment to use)
// fs.unlinkSync("data.txt");