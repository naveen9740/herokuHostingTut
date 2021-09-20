const { values } = require("lodash");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: "cannot enter a product without name",
      minlength: [2, "length should be greater than 2"],
      maxlength: [5, "length should be Less than 5"],
      unique: [true, "items should be unique"],
    },
    price: {
      type: Number,
      required: "cannot enter a product without price",
      // min: [2, "price cannot be less than 2 digits"],
      max: [500, "price cannot be more than 800 digits"],
    },
  },
  {
    timestamps: true,
  }
);
const productModel = mongoose.model("products", ProductSchema);
// productModel.find({}).then((data) => console.log(data));

module.exports = productModel;
