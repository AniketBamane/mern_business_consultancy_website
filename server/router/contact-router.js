const express = require('express')
const contact = require("../controller/contact-controller")
const router = express.Router()


router.route("/contact").post(contact.contactForm)


module.exports =  router