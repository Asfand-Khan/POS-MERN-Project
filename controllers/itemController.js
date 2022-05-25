const mongoose = require("mongoose");
const ItemModel = require("../models/itemModel");

export const getAllItems = async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.status(200).res(items);
  } catch (error) {
    console.log(error);
  }
};
export const addItem = () => {};
