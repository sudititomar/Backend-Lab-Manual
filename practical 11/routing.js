const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.end("Welcome Home");
    } 
    else if (req.url === "/login") {
        res.end("Login Page");
    } 
    else if (req.url === "/data") {
        res.end(JSON.stringify({ name: "Suditi" }));
    } 
    else {
        res.end("404 Not Found");
    }
});

server.listen(3000);