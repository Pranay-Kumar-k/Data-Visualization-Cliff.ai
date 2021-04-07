// Schema for metrics data
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const metricSchema = new Schema({
        measure:{
            type:String,
            required:true
        },
        dimensions:{
            type:Array,
            required:true
        }
    },
    {
        versionKey:false,
    }
);

module.exports = mongoose.model("Metrics", metricSchema);