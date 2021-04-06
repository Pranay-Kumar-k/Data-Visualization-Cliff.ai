const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost/mvc', 
        { 
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`Mongodb connected : ${connect.connection.host}`);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        process.exit(1);
    }
}

module.exports = connectDB;