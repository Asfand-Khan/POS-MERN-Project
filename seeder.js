const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ItemModel = require("./models/itemModel");
const connectDb = require("./config/conn");
const items = require("./utils/data");

//config
dotenv.config();
connectDb();

//seeder function

const importData = async () => {
  try {
    await ItemModel.deleteMany();
    await ItemModel.insertMany(items);
    console.log("All items are added in database");
    process.exit();
  } catch (e) {
    console.log(`Items are not added ${e}`);
    process.exit(1);
  }
};
importData();
