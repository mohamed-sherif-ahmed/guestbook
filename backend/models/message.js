var db = require('mongoose');

var message = db.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: db.Schema.Types.ObjectId,
        ref: 'user'
    }
});

var Message = db.model('message', message);
module.exports = Message;