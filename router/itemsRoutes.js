const express = require("express");
const { getAllItems, addItem } = require("../controllers/itemController");
const router = express.Router();

//router
//method - get
router.get("/get-items", getAllItems);

//method - post
router.post("/add-item", addItem);

module.exports = router;
