// Invoking the application using express framework
// connecting application to the db using dotenv URI
// Initializing the application on local server with port 5000

const express = require("express");

const connectDB = require("./config/db");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

connectDB();

// app.use(express.json());

const itemRoutes = require("./routes/items");

const metricRoutes = require("./routes/metricRoutes");

app.use('/metrics', metricRoutes);

app.listen(5000, () => {
    console.log("server is up and running");
});