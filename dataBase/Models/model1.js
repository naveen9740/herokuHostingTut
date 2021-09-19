const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: "cannot enter a product without name",
  },
  price: {
    type: Number,
    required: "cannot enter a product without price",
    min: [2, "price cannot be less than 2 digits"],
    max: [5, "price cannot be more than 5 digits"],
  },
});
const productModel = mongoose.model("products", ProductSchema);
// productModel.find({}).then((data) => console.log(data));

module.exports = productModel;
