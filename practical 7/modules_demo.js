const os = require("os");
const path = require("path");
const url = require("url");

// OS module
console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());

// PATH module
const filePath = path.join(__dirname, "folder", "file.txt");
console.log("Joined Path:", filePath);

// URL module
const myUrl = new URL("http://localhost:3000/test?name=kritika&age=20");
console.log("Hostname:", myUrl.hostname);
console.log("Query Params:", myUrl.searchParams.get("name"));