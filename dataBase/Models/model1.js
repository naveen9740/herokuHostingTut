const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({ name: String, price: Number });
const productModel = mongoose.model("products", ProductSchema);
// productModel.find({}).then((data) => console.log(data));

module.exports = productModel;
