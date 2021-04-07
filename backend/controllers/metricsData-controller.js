// Controller functions to get metrics item data from db

const metricsData = require("../models/MetricsData");

const getMetricsData = (req, res) => {

  let id = req.params.id
  console.log(id)

    metricsData.find({"id": id.toString()})
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error))
  };
  

module.exports = {getMetricsData};