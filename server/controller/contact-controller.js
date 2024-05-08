const contactModel = require("../model/contact-model")
const contactForm = async(req,res)=>{
  try{
    const {name,email,message} = req.body;
    const contactCreated = await contactModel.create({name,email,message});
    res.status(200).json({message:"contact created successfully",contactCreated})
  }catch(err){
    res.status(404).json({message: err.message});
  }
}

module.exports = {contactForm};