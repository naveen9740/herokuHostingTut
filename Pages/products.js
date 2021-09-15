const express = require("express");
const products = express.Router();
// const bodyParser = require("body-parser");

const productsList = [
  { name: "naveen", price: 2345, id: 1 },
  { name: "kamath", price: 3412, id: 2 },
];

products.use(express.json());

products
  .route("/")
  .get((req, res) => {
    res.json({ productsList });
  })
  .post((req, res) => {
    const newProduct = req.body;
    productsList.push(newProduct);
    res.json({ newProduct });
  });

products
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    const prod = productsList.find((product) => product.id == id);
    res.json({ id: parseInt(id), prod });
  })
  .post((req, res) => {
    const update = req.body;
    const { id } = req.params;
    productsList.forEach((product) => {
      if (product.id == id) {
        Object.keys(update).forEach((key) => {
          if (key in product) {
            product[key] = update[key];
            return res.json({ productsList });
          }
        });
      }
    });
    return res.status(404).json({ msg: `Incorrect id ${id}` });
  });

module.exports = products;
