// Controller functions to get metrics item data from db

const metricsData = require("../models/MetricsData");

const getMetricsData = (req, res) => {

  let Id = req.params.id
  console.log(Id)

    metricsData.find({id: req.params.id.toString()})
    .then((data) => res.status(200).json({data}))
    .catch((error) => res.status(400).json(error))
  };
  

module.exports = {getMetricsData};