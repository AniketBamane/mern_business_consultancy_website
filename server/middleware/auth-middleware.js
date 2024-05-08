const validate = (schema) => async(req, res, next)=>{
  try{
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody
    next()
  }catch(error){
    const err = {
      message: "fill input details clearly !",
      extraDetails:error.errors[0].message,
      status:422,
    }
   next(err);
  }
} 

module.exports = validate;