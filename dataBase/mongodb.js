const mongo = require("mongodb");
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://NaveenKamath:naveen%40coursera@cluster0.hrd9f.mongodb.net/inventory?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const run = async () => {
  try {
    const database = client.db("inventory");
    const products = database.collection("products");

    const newProduct = { name: "newNaveen", price: 1 };
    const result = await products.insertOne(newProduct);
    console.log(
      `${result.insertedCount} documents were inserted with id : ${result.insertedId}`
    );

    const query = { name: "newNaveen" };
    const product = await products.findOne(query);
    console.log("foundOne", product);
  } finally {
    await client.close();
  }
};
run().catch(console.dir);

module.exports = run;
