require("dotenv").config();

const express = require("express");

const {connection} = require("./Config/db");

const userRoutes = require("./routes/user.route");
const bookRoutes = require("./routes/book.route");

const app = express();

app.use(express.json());

app.use("/api/auth",userRoutes);

app.use("/api/book",bookRoutes);

app.get("/",(req,res)=>{
res.send("LibSpace API Running");
});

app.listen(process.env.PORT,async()=>{

try{

await connection;

console.log("Connected to Database");

console.log(`Server running on port ${process.env.PORT}`);

}
catch(err){

console.log("DB connection failed");

}

});