const express = require('express');
const router = express.Router();
const authenticationController = require('./../controllers/authentication');
const messageRouter = require('./messages');
const replyRouter = require('./../routes/reply');

router.get('/login', authenticationController.generateToken);
router.post('/signup', authenticationController.addUser);
router.use(authenticationController.verifyToken);
router.use('/messages', messageRouter);
router.use('/reply', replyRouter);

module.exports = router;
