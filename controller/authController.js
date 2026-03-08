const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/user.model");
const BlackModel = require("../models/blackListerToken");

exports.register = async(req,res)=>{

try{

const {name,email,password} = req.body;

if(!name || !email || !password){
return res.send("All fields required");
}

const user = await UserModel.findOne({email});

if(user){
return res.send("User already exists");
}

const hash = await bcrypt.hash(password,5);

const newUser = new UserModel({
name,
email,
password:hash
});

await newUser.save();

res.send("User registered");

}

catch(err){
res.send(err);
}

};



exports.login = async(req,res)=>{

try{

const {email,password} = req.body;

const user = await UserModel.findOne({email});

if(!user){
return res.send("User not found");
}

const check = await bcrypt.compare(password,user.password);

if(check){

const token = jwt.sign(
{userId:user._id},
process.env.JWT_SECRET
);

res.send({msg:"Login successful",token});

}
else{
res.send("Wrong password");
}

}
catch(err){
res.send(err);
}

};



exports.logout = async(req,res)=>{

const token = req.headers.authorization.split(" ")[1];

await BlackModel.create({token});

res.send("Logged out");

};



exports.deleteUser = async(req,res)=>{

const id = req.userId;

await UserModel.findByIdAndDelete(id);

res.send("User deleted");

};