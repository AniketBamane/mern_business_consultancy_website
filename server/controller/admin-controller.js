const userModel = require("../model/user-model")
const contactModel = require("../model/contact-model")
const serviceModel = require("../model/service-model")

const getUsers = async (req,res,next)=>{
  try{
    const users = await userModel.find({},{password:0})
    if(users == null || users.length ===0){
      return res.status(404).json({message:"no users found !"})
    }
    res.status(200).json({users:users})
  }catch(e){
    console.error(e.message)
  }
}

const getContacts = async(req, res, next) =>{
  try{
    const contacts = await contactModel.find()
    if(contacts == null || contacts.length ===0){
      return res.status(404).json({message:"no contacts found !"})
    }
    res.status(200).json({contacts:contacts})
  }catch(e){
    console.error(e.message)
  }
}

const getServices = async(req, res, next) =>{
  try{
    const services = await serviceModel.find()
    if(services == null || services.length ===0){
      return res.status(404).json({message:"no services found !"})
    }
    res.status(200).json({services:services})
  }catch(e){
    console.error(e.message)
  }
}

const deleteUser = async(req, res, next) =>{
  try{
  await userModel.deleteOne({_id:req.params.id})
  return res.status(200).json({message:"user deleted !"})
  }catch(e){
    next(e)
  }
}

const updateUser = async(req, res, next) =>{
  try{
    await userModel.findByIdAndUpdate(req.params.id,{
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      isAdmin:req.body.isAdmin
    })
    return res.status(200).json({message:"user updated !"})
  }catch(e){
    next(e)
  }
}

const deleteContact = async(req, res, next) =>{
  try{
  await contactModel.deleteOne({_id:req.params.id})
  return res.status(200).json({message:"user deleted !"})
  }catch(e){
    next(e)
  }
}

const deleteService = async(req, res, next) =>{
  try{
  await serviceModel.deleteOne({_id:req.params.id})
  return res.status(200).json({message:"user deleted !"})
  }catch(e){
    next(e)
  }
}

module.exports = {getUsers,getContacts,getServices,deleteUser,updateUser,deleteContact,deleteService}