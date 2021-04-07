// Schema for metrics.json file
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const metricSchema = new Schema({
        id:{
            type:String,
            required:true
        },
        measure:{
            type:String,
            required:true
        },
        dimensions:{
            type:Array,
            required:true
        }
    },
    // {
    //     versionKey:false,
    // }
);

module.exports = mongoose.model("Metrics", metricSchema);