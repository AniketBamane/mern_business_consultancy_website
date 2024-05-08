const errorMiddleWare =  (err,req,res,next)=>{
  const message = err.message || "backend error !";
  const statusCode = err.statusCode || 500;
  const extraDetails = err.extraDetails || " there is some problem in backend!";

   return res.status(statusCode).json({message, extraDetails});
}

module.exports = errorMiddleWare;