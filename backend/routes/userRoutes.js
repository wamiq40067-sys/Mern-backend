const express = require("express");
const app = express();

const {
  registerUser,
  loginUser,
  getProfile,
  uploadImage,
} = require("../controller/userController");

const protected = require("../middleware/authMiddleware");
const upload = require("../utils/multer");

const router = express.Router(); //  we start express in router file

// we will handles URL's in router
// we will make API logic in controller

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protected, getProfile);

router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
