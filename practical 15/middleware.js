const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Request received:", req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3000);