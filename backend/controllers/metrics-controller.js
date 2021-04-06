const metrics = require("../models/Metrics");


const getMetrics = (req,res) => {
    metrics.find()
    .then((metrics) => res.json(metrics))
    .catch(err => res.json(err));
}

module.exports = {getMetrics};