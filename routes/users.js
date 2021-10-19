const express  = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

console.log('users page loaded');

router.get('/profile', usersController.profile);
module.exports = router;