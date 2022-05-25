const mongoose = require("mongoose");
const ItemModel = require("../models/itemModel");

const getAllItems = async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.status(200).send(items);
    // console.log("first");
  } catch (error) {
    console.log(error);
  }
};
const addItem = () => {};

module.exports = { getAllItems, addItem };
