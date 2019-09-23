var db = require('mongoose');

var reply = db.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: db.Schema.Types.ObjectId,
        ref: 'user'
    },
    message: {
        type: db.Schema.Types.ObjectId,
        ref: 'message'
    }
});

var Reply = db.model('reply', reply);
module.exports = Reply;