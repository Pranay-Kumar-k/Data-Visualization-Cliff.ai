const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const metricsDataSchema = new Schema({
        id:{
            type:String,
            required:true
        },
        _id:{
            type:Schema.Types.ObjectId,
            required:true
        },
        data: {
            type:Array,
            required:true
        }
        // [
        //     {
        //         original_value:{
        //             type:Number,
        //             required:true
        //         },
        //         forecasted_value:{
        //             type:Number,
        //             required:true
        //         },
        //         min_band:{
        //             type:Number,
        //             required:true
        //         },
        //         max_band:{
        //             type:Number,
        //             required:true
        //         },
        //         line_status:{
        //             type:Number,
        //             required:true
        //         },
        //         timestamp:{
        //             type:String,
        //             required:true
        //         }
        //     }
        // ]
    },
    {
        versionKey:false,
    }
);

module.exports = mongoose.model("MetricsData", metricsDataSchema);