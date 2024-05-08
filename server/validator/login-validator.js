const  {z} = require("zod")

userLoginSchema = z.object({
  email: z.string({required_error:"email is required !"}).trim().email({message:"invalid email address"}).min(3,{message:"email must be at least 3 characters"}).max(255,{message:"email must not exceed 255 characters"}),
  password: z.string({required_error:"password is required"}).min(6,{message:"password must be at least 6 characters"}).max(255,{message:"password must not exceed 255 characters"}),
})

module.exports = userLoginSchema