const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    category: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type,
      String,
    },
  },
  { timestamp: true }
);

const Items = mongoose.Model("Items", itemSchema);
module.exports = Items;
