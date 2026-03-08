const express = require("express");

const router = express.Router();

const verifyToken = require("../middlewares/verify_token");

const {
addBook,
getBooks,
getBookById,
updateBook,
deleteBook
} = require("../controller/bookController");

router.post("/add",verifyToken,addBook);

router.get("/",verifyToken,getBooks);

router.get("/:id",verifyToken,getBookById);

router.put("/:id",verifyToken,updateBook);

router.delete("/:id",verifyToken,deleteBook);

module.exports = router;