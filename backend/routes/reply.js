const express = require('express');
const router = express.Router();
const replyController = require('./../controllers/reply');

router.post('/add', replyController.replyToMessage);

module.exports = router;