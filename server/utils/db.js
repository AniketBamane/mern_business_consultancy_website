const mongoose =  require('mongoose');

const URI = process.env.MONGODB_URI;

const connection = async ()=>{
  try{
   await mongoose.connect(URI);
    console.log("connected to db");
  }catch(e){
    console.error(e.message);
    process.exit(0);
  }
};

module.exports = connection;
