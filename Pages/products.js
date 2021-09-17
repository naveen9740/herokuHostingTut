const express = require("express");
const bodyParser = require("body-parser");
const database = require("../dataBase/mongoose");
const productModel = require("../dataBase/Models/model1");
const products = express.Router();

// const productsList = [
//   { name: "naveen", price: 2345, id: 1 },
//   { name: "kamath", price: 3412, id: 2 },
// ];
database();
products.use(express.json());

products
  .route("/")
  .get(async (req, res) => {
    try {
      const products = await productModel.find({});
      res.json({ products });
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const newProd = req.body;
      const Watch = new productModel(newProd);
      const response = await Watch.save();
      console.log(response);
      res.json({ msg: "product has benn added", response });
    } catch (error) {
      console.log({ error });
    }
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
