const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts_conntroller');

router.post('/create',postsController.create);

module.exports = router;