// Controller functions to get metrics data from db

const metrics = require("../models/Metrics");

// var MongoClient = require('mongodb').MongoClient;

// const getMetrics = (req,res) => {

// Connect to the db
// MongoClient.connect("mongodb://localhost:5000/Data_Visualization", function (err, db) {
    
//     db.collection('metrics', function (err, collection) {
        
//          collection.find().toArray(function(err, items) {
//             if(err) throw err;    
//             else res.json(items);            
//         });
        
//     });
                
// });
//     metrics.find().then(metrics => {
//         res.json(metrics),
//         console.log(metrics)
//     })
//     .catch(err => console.log(err)) 
// }

const getMetrics = (req, res) => {
    metrics.find({}).exec((error, metrics) => {
      if (error) return res.status(400).json({ error });
  
      if (metrics) {
        res.status(200).json(metrics);
      }
    });
  };
  

module.exports = {getMetrics};