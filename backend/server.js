const express = require("express");

const connectDB = require("./config/db");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

connectDB();

const itemRoutes = require("./routes/items");

const metricRoutes = require("./routes/metricRoutes");

app.use('/metrics', metricRoutes);

app.listen(5000, () => {
    console.log("server is up and running");
});