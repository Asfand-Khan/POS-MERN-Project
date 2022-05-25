const mongoose = require("mongoose");

//connecDB Function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/MERNPOS"||process.env.MONGO_URI);
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

//export
module.exports = connectDb;