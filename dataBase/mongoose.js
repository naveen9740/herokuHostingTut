const mongoose = require("mongoose");
const { Schema } = mongoose;

const database = async () => {
  try {
    const response = await mongoose.connect(
      "mongodb+srv://NaveenKamath:naveen%40coursera@cluster0.hrd9f.mongodb.net/inventory?retryWrites=true&w=majority"
    );
    console.log("mongoose connected");
  } catch (error) {
    console.log(`mongoose connection failed ,ERROR: ${error.message}`);
  }
};
module.exports = database;
