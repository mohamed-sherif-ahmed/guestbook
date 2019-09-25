const express = require('express');
const router = express.Router();
const messageController = require('./../controllers/message');

router.post('', messageController.addMessage);
router.delete('/:id', messageController.deleteMessage);
router.put('', messageController.editMessage);
router.get('', messageController.getMessages);

module.exports = router;
