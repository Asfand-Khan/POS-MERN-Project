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
const addItem = async (req, res) => {
  const newItem = await ItemModel(req.body);
  await newItem.save();
};

module.exports = { getAllItems, addItem };
