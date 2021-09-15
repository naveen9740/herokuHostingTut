const express = require("express");
const auth = require("../Middlewares/auth");

const wishList = express.Router();
wishList.use(auth);

wishList.route("/").get((req, res) => {
  res.json({ msg: "welcome to WISHLIST PAGE" });
});

module.exports = wishList;
