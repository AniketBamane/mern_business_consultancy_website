const express = require('express');
const controller = require("../controller/service-controller")
const router = express.Router();


router.route('/services').get(controller.service);

module.exports = router;