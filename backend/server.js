const express = require("express");

const app = express();

app.get("/", (req,res) => {
    console.log("Hello World");
});

app.listen(5000, () => {
    console.log("server is up and running");
});