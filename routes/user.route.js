const express = require("express");

const router = express.Router();

const {
register,
login,
logout,
deleteUser
} = require("../controller/authController");

const verifyToken = require("../middlewares/verify_token");

router.post("/register",register);

router.post("/login",login);

router.post("/logout",verifyToken,logout);

router.delete("/delete",verifyToken,deleteUser);

module.exports = router;