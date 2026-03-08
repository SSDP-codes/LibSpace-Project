const jwt = require("jsonwebtoken");
const BlackModel = require("../models/blackListerToken");

const verifyToken = async (req,res,next)=>{

const token = req.headers.authorization?.split(" ")[1];

if(!token){
return res.status(401).send("Token missing");
}

const black = await BlackModel.findOne({token});

if(black){
return res.status(401).send("Token logged out");
}

try{

const decoded = jwt.verify(token,process.env.JWT_SECRET);

req.userId = decoded.userId;

next();

}
catch(err){

res.status(401).send("Invalid token");

}

};

module.exports = verifyToken;