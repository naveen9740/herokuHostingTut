const express = require("express");
const bodyParser = require("body-parser");
const database = require("../dataBase/mongoose");
const productModel = require("../dataBase/Models/model1");
const { extend } = require("lodash");
const assert = require("assert");
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
      res.status(404).json({ msg: error.message, error });
    }
  })
  .post(async (req, res) => {
    try {
      const update = req.body;
      let newProduct = new productModel(update);
      const response = await newProduct.save();
      res.json({ msg: "product added to db", newProduct });
    } catch (error) {
      // if (error.code == 11000) {
      //   return res.json({ msg: "name should be unique" });
      // }
      res.json({ success: false, error: error.message, error });
    }
  });

products.param("productId", async (req, res, next, productId) => {
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      return res.json({
        msg: "error while retrieving product, Product has been deleted",
      });
    }
    req.product = product;
    next();
  } catch (error) {
    res.status(404).json({
      success: false,
      msg: "product not found",
      error: error.message,
    });
  }
});

products
  .route("/:productId")
  .get((req, res) => {
    const { product } = req;
    res.json({ success: true, product });
  })
  .post(async (req, res) => {
    const update = req.body;
    let { product } = req;
    product = extend(product, update);
    product = await product.save();
    res.json({ msg: "product updated", product });
  })
  .delete(async (req, res) => {
    let { product } = req;
    product = await product.remove();
    let allProducts = await productModel.find({});
    res.json({ msg: "product deleted", product });
  });

module.exports = products;
