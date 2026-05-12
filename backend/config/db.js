const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.mongo_Url);
        console.log("MongoDB connected");
    } catch(err) {
        console.log(err);
    }
};

module.exports = connectDB; // mandatory to export 