// Controller functions to get metrics item data from db

const metrics_data = require("../models/MetricsData");

const getMetricsData = (req, res) => {

  let Id = req.params.id
  console.log(Id)

    metrics_data.find({id: req.params.id.toString()})
    .then((item) => res.status(200).json(item))
    .catch((error) => res.status(400).json(error))
  };
  

module.exports = {getMetricsData};