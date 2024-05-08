const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true,
  },
  isAdmin:{
    type: Boolean,
    default: false,
  }
});

userSchema.pre("save", function(next){
  const user =  this
  if(!user.isModified("password")){ // user is first time to database or not || if old password is not changed then 
    return next()
  }

  // if old password is changed to new password then i.e from blank to some 

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
         user.password = hash
         console.log("hashing is done !");
         next()
    });
});
})

userSchema.methods.generateToken = async function(){
  try{
    return jwt.sign({ 
      id: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
     }, process.env.SECRET_KEY);

  }catch(error){
    console.error(error.message)
  }
}

// user bcrypt compare 

userSchema.methods.comparePassword = async function(password){
  try{
    return await bcrypt.compare(password,this.password)
  }catch(error){
    console.error(error.message)
  }
}


 
module.exports = mongoose.model('User', userSchema);