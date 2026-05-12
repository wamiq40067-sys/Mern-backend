const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    address:String,
    phone:String,
    password:String,
});


module.exports = mongoose.model("user" , userSchema); // user over here is the collection of database

// model is used for CURD operations 

//difference between Schema and models 
// Schema define structure              model is used to interact with the database
// Schema is a blueprint                model is the actual working class
// Schema is only design                we perform curd operations in model