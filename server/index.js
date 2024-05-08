require("dotenv").config();
const express =  require('express')
const cors = require('cors')
const app = express()
const connection = require("./utils/db")
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router")
const serviceRouter = require("./router/service-router")
const adminRouter = require("./router/admin-router")

const errorMiddleWare = require("./middleware/error-middleware");

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods:"POST ,GET, PUT, PATCH, HEAD, DELETE",
}

app.use(cors(corsOptions));
app.use(express.json())

// routers 
app.use("/api/auth",authRouter)
app.use("/api/form",contactRouter)
app.use("/api/service",serviceRouter)
app.use("/api/admin",adminRouter)

app.use(errorMiddleWare)
connection().then(()=>{
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
  })
})