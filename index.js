const express = require("express");
const products = require("./Pages/products");
const wishList = require("./Pages/wishList");
const routeHandler = require("./Middlewares/routeHandler");
const errorHandler = require("./Middlewares/errorHandler");
const cors = require("cors");
// 1:15:00
const app = express();
app.use(cors());
app.use("/products", products);
app.use("/wishList", wishList);

app.get("/", (req, res) => {
  // throw Error("Booo");
  res.json({ msg: "welcome to home Page" });
});

app.use(errorHandler);
app.use(routeHandler);

// process.env.PORT ||
app.listen(3000, () => {
  console.log(`server started`);
});
