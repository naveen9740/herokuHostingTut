const express = require("express");
const products = require("./Pages/products");
const wishList = require("./Pages/wishList");

const app = express();
app.use("/products", products);
app.use("/wishList", wishList);

app.get("/", (req, res) => {
  res.json({ msg: "welcome to home Page" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server started`);
});