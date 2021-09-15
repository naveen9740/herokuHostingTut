const express = require("express");
const products = require("./Pages/products");
const wishList = require("./Pages/wishList");
const cors = require("cors");

const app = express();
app.use(cors());
app.use("/products", products);
app.use("/wishList", wishList);

app.get("/", (req, res) => {
  res.json({ msg: "welcome to home Page" });
});

app.use("/:path", (req, res, next) => {
  const { path } = req.params;
  res.json({ msg: `wrong route ${path}` });
  next();
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server started`);
});
