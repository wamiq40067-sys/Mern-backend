// const express = require("express"); // import express
// const app = express(); // start express

// app.get("/",(req,res) => {  // we are sending requests using app.get (get method)
//     res.send("hello world")
// });

// app.get("/about" ,(req,res) => {
//     res.send("this is our about page")
// })

// app.get("/data",(req,res) => {
//     res.json({name:"wamiq" , role:"student"})
// })
// const PORT = 3000;
// app.listen(PORT ,() => {
//     console.log(`server running at http://localhost:${PORT}`);
// })

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("this is homepage");
// });

// app.get("/about", (req, res) => {
//   res.send("this is about page");
// });

// app.get("/contact", (req, res) => {
//   res.send("this is contact page");
// });

// const mongoose = require("mongoose");

// mongoose
//   .connect(
//     "mongodb+srv://wamiq40067_db_user:wamiq@cluster0.qinz6as.mongodb.net/myDatabase?retryWrites=true&w=majority",
//   )

//   .then(() => console.log("mongoAtlasConnected"))
//   .catch((err) => console.log(err));

//   const userSchema = new mongoose.Schema({
//     name:String,
//     age:Number,
//     email:String
//   });

//   const user = mongoose.model("user",userSchema);

//   app.get("/add-user",async(req,res) => {
//     const user = new user({
//         name:"Adarsh",
//         age:24,
//         email:"abc@gmail.com"
//     });
//     await user.save();
//     res.send("user added successfully");
//   });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`server running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("this is homepage");
// });

// app.get("/about", (req, res) => {
//   res.send("this is about page");
// });

// app.get("/contact", (req, res) => {
//   res.send("this is contact page");
// });

// mongoose
//   .connect(
//     "mongodb+srv://wamiq40067_db_user:wamiq@cluster0.qinz6as.mongodb.net/myDatabase?retryWrites=true&w=majority",
//   )
//   .then(() => console.log("Mongo Atlas Connected"))
//   .catch((err) => console.log(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
// });

// const User = mongoose.model("User", userSchema);

// app.get("/add-user", async (req, res) => {
//   const user = new User({
//     name: "Adarsh",
//     age: 24,
//     email: "abc@gmail.com",
//   });

//   await user.save();
//   res.send("User added successfully");
// });

// //read
// app.get("/users", async (req,res) => {
//   const users = await User.find();
//   res.json(users);
// });

// //update
// app.get("/update-user", async (req,res) => {
//   await User.updateOne(
//     {email:"abc@gmail.com"},
//     {$set:{age:30}}
//   );
//     res.send("User updated successfully");
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("this is homepage");
// });

// mongoose
//   .connect(
//     "mongodb+srv://wamiq40067_db_user:wamiq@cluster0.qinz6as.mongodb.net/myDatabase?retryWrites=true&w=majority",
//   )
//   .then(() => console.log("Mongo Atlas Connected"))
//   .catch((err) => console.log(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
// });

// const User = mongoose.model("User", userSchema);

// // CREATE
// app.get("/add-user", async (req, res) => {
//   const user = new User({
//     name: "Adarsh",
//     age: 24,
//     email: "abc@gmail.com",
//   });

//   await user.save();
//   res.send("User added successfully");
// });

// // READ
// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// // UPDATE
// app.get("/update-user", async (req, res) => {
//   await User.updateOne({ email: "abc@gmail.com" }, { $set: { age: 30 } });
//   res.send("User updated successfully");
// });

// // DELETE
// app.get("/delete-user", async (req, res) => {
//   await User.deleteOne({ email: "abc@gmail.com" });
//   res.send("User deleted successfully");
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// app.get("/", (req,res) => {
//   res.send(" this is homepage");
// });
// app.get("/about", (req,res) => {
//   res.send(" this is about page");
// });
// app.get("/contact", (req,res) => {
//   res.send(" this is contact page");
// });

//CONNECT DATABASE
// mongoose.connect(
//   "mongodb+srv://wamiq40067_db_user:wamiq@cluster0.qinz6as.mongodb.net/myDatabase?retryWrites=true&w=majority"
// )
// .then(() => console.log("Atlas connected successfully"))
// .catch((err) => {err});

// SCHEMA
// const employeeSchema = new mongoose.Schema({
//   name:String,
//   age:Number,
//   email:String,
//   designation:String,
//   salary:Number
// });

//MODEL
// const Employee = mongoose.model("employee", employeeSchema);

//CREATE
// app.get("/add-employee" , async (req,res) => {
//   const employee = new Employee({
//     name:"Aman",
//     age:19,
//     email:"Aman@gmail.com",
//     designation:"data Scientist",
//     salary:300000
//   });
//   await employee.save();
//   res.send("employee added successfully");
// });

//READ 
// app.get("/employees", async(req,res) => {
//   const employees = await Employee.find();
//   res.json(employees);
// });

// UPDATE
// app.get("/update-employee", async(req,res) => {
//   await Employee.updateOne({email:"Aman@gmail.com"},{$set: {designation:"senior data scientist"} });
//   await Employee.updateOne({email:"Aman@gmail.com"},{$set: {salary:600000} });
//   res.send("Updated successfully");
// });

//DELETE 
// app.get("/delete-employee",async(req,res) => {
//   await Employee.deleteOne({email:"Aman@gmail.com"});
//   res.send("deleted successfully");
// })

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`server running at http://localhost:${PORT}`);
// });



// implementation 

const express = require("express");

const connectDB = require("./config/db");
require("dotenv").config();                 //config

const userRoutes = require("./routes/userRoutes"); // routes with controller

const app = express();
app.use(express.json()); // response from server
connectDB(); //connect atlas database

app.use("/api/users" , userRoutes);

app.get("/", (req,res) => {
    res.send("server is running");
}); 

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
