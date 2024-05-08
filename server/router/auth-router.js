const express = require('express')
const controller = require("../controller/auth-controller")
const validate = require("../middleware/auth-middleware")
const userValidationSchema = require("../validator/auth-validator")
const userLoginSchema =  require("../validator/login-validator")
const userMiddleware  = require('../middleware/userData-middleware')
const router =  express.Router()

router.route("/").get(controller.home)


router.route("/register").post(validate(userValidationSchema),controller.register)

router.route("/login").post(validate(userLoginSchema),controller.login)

router.route("/user").get(userMiddleware,controller.user)

module.exports = router