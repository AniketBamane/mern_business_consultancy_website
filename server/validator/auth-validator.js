const {z} = require('zod');

const userValidationSchema = z.object({
  name: z.string({required_error:"username is required !"}).trim().min(3,{message:"name must be at least 3 characters"}).max(255,{message:"username must not exceed 255 characters"}),
  email: z.string({required_error:"email is required !"}).trim().email({message:"invalid email address"}).min(3,{message:"email must be at least 3 characters"}).max(255,{message:"email must not exceed 255 characters"}),
  password: z.string({required_error:"password is required"}).min(6,{message:"password must be at least 6 characters"}).max(255,{message:"password must not exceed 255 characters"}),
  phone: z.string({required_error:"phone is required"}).trim().min(10,{message:"phone must be at least 10 numbers"}).max(20,{message:"phone must not exceed 20 characters"}),
})


module.exports = userValidationSchema