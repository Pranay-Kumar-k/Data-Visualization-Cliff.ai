// Routes for getting metric items
const express  = require("express");

const router = express.Router();

const {getItem} = require("../controllers/item-controller");

router.get("/", getItem);

module.exports = router;