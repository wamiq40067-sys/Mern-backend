//The brain

const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, age, email, address, phone, password } = req.body;

  //INPUT VALIDATION
   if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

  //PASSWORD VALIDATION
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters"
      });
    }

  //DUPLICATE EMAIL CHECK
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

  //hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    age,
    email,
    address,
    phone,
    password: hashedPassword,
  });
  res.json({
    message: "User connected successfully",
    user,
  });
};

//login logic
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //DUPLICATE EMAIL CHECK
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  // email compare
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }

  // password compare
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "invalid password" });
  }

  try {
    // token generation
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      message: "Login Successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }

  //successfull response
  // res.status(200).json({
  //   message:"Login successful",
  //   user: {
  //     id: user._id,
  //     email: user.email
  //   }
  // })
};



const getProfile = (req, res) => {
  res.json({
    message:"Welcome to protected profile" , 
    user:req.user
  })
};



const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }

  res.status(200).json({
    message: "File uploaded successfully",
    file: req.file.filename,
  });
};


module.exports = { registerUser, loginUser, getProfile, uploadImage }; // we can use it in our route file
