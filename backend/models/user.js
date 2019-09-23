var db = require('mongoose');
var bcrypt = require('bcryptjs');

var User = db.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    hash_password: {
        type: String,
        required: true
    }
});

User.methods.compare_password = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
}

var User = db.model('user', User);
module.exports = User;