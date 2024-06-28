// this will be used to communite with the client
const express = require("express");
const router = express.Router(); //using a router instance to handle requests to the page

router.get("/", (req, res) => {
  res.send("server is running");
});

router.get("/about", (req, res) => {
  res.send("This is the about page");
});

router.get("/contact", (req, res) => {
    res.send("This is the contact page");
    });

module.exports = router; //export router to be used in app.js