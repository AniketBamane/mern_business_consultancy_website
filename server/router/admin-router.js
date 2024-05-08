const express = require('express');
const router = express.Router()
const controller = require("../controller/admin-controller")
const userMiddleware = require("../middleware/userData-middleware")
const adminMiddleware = require("../middleware/admin-middleware")

router.route('/users').get(userMiddleware,adminMiddleware,controller.getUsers)

router.route('/contacts').get(userMiddleware,adminMiddleware,controller.getContacts)

router.route("/services").get(userMiddleware,adminMiddleware,controller.getServices)

router.route("/delete/:id").delete(userMiddleware,adminMiddleware,controller.deleteUser)

router.route("/update/:id").patch(userMiddleware,adminMiddleware,controller.updateUser)

router.route("/contact/delete/:id").delete(userMiddleware,adminMiddleware,controller.deleteContact)

router.route("/service/delete/:id").delete(userMiddleware,adminMiddleware,controller.deleteService)


module.exports = router;