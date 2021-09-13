const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log("ROUTER LOADED");

router.get('/',homeController.home);
router.get('/user',homeController.userProfile);
module.exports = router;