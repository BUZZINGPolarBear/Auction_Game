"use strict";
const socketIo = require("socket.io").Server;
const http = require("http");
const express = require("express");

const app = express();
const io = socketIo();
let round = 1;//n회차를 나타내는 변수임.

app.get("/", (req, res) => {
    res.send("Welcome to AuctionGame");
});

io.on("connection", function(socket) {
    console.log("socket client connected");
});