const BookModel = require("../models/book.model");

exports.addBook = async(req,res)=>{

try{

const {title,author,url} = req.body;

const book = new BookModel({
title,
author,
url,
user:req.userId
});

await book.save();

res.send("Book added");

}
catch(err){
res.send(err);
}

};



exports.getBooks = async(req,res)=>{

const books = await BookModel.find({user:req.userId});

res.send(books);

};



exports.getBookById = async(req,res)=>{

const id = req.params.id;

const book = await BookModel.findById(id);

res.send(book);

};



exports.updateBook = async(req,res)=>{

const id = req.params.id;

await BookModel.findByIdAndUpdate(id,req.body);

res.send("Book updated");

};



exports.deleteBook = async(req,res)=>{

const id = req.params.id;

await BookModel.findByIdAndDelete(id);

res.send("Book deleted");

};