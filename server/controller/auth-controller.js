const userModel =  require("../model/user-model")
// home logic 

const home =async (req,res)=>{
  res.status(200).send("welcome home page  through controller !");
}


//  register logic 


const register =async (req,res)=>{
 try{
  console.log("in register method  !")
   const {email,name,phone,password} = req.body;

   const userExist =  await userModel.findOne({email})
   if(userExist){
    return res.status(400).json({message:"user already exist"})
   }
   console.log("user is going for creation !")
   const userCreated = await userModel.create({name,email,phone,password});
   console.log("user created successfully !")
    res.status(200).json({message:"user created successfully",token: await userCreated.generateToken()})
    console.log("it should be returned to browser !")
 }catch(error){
  console.error(error.message)
 }
}

// login 

const login = async(req, res) => {
  const {email, password} =  req.body;
  const userExist = await userModel.findOne({email})
  if(!userExist){
    return res.status(400).json({message:"user does not exist"})
  };

  const result =  await userExist.comparePassword(password)
  if(result){
    res.status(200).json({message:"user logged in successfully",token: await userExist.generateToken()})
  }else{
    res.status(400).json({message:"credentials are  incorrect"})
  }
  
}

const user = async (req, res) => {
  try{
    const userData = req.user
    console.log(userData)
    res.status(200).json({message:"user data",userData})
  }catch(error){
    res.status(400).json({message:"invalid "})
  }
}




module.exports = {home,register,login,user};