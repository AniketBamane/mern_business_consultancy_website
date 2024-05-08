const userModel = require("../model/user-model");
const jwt  = require("jsonwebtoken")
const userMiddleware = async (req, res, next) => {
 try{
  const token = req.headers['authorization']
if(!token){
  return res.status(401).json({message:"invalid http request , could not find token !"});
}
const newToken = token.replace("Bearer ", "")
 const decodedToken = jwt.verify(newToken, process.env.SECRET_KEY)
  const user = await userModel.findOne({email:decodedToken.email}).select({password:0})
  if(user){
    req.user = user;
    next()
  }else{
   return  res.status(401).json({message:"invalid token , could not find user !"});
  }
 }catch(error){
  return res.status(404).json({message: error.message});
 }
}

module.exports = userMiddleware