const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const data = fs.readFileSync("index.html");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
});

server.listen(5000);