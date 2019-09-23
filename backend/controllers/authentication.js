const jwt = require('jsonwebtoken');
const User = require('./../models/user');

module.exports = {
    generateToken: (req, res, next) => {
        const email = req.headers.email;
        const password = req.headers.password;
        User.findOne({email: email})
        .then((user) => {
            if (user) {
                if (user.compare_password(password)) {
                    res.json({token: jwt.sign({userID: user._id}, 'guestbook')});
                } else {
                    res.status(401).json({message: "Wrong Password"});
                }
            } else {
                res.status(401).json({message: "Email is incorrect"});
            }
            user.compare_password();
        })
        .catch((err) => {
             next(err);
        });
    },
    verifyToken: (req, res, next) => {
        var token = req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, 'guestbook', (err, decoded) => {
                if (err) {
                    return res.status(401).json({message: 'Invalid Token, Please Login again' });    
                } else {
                    console.log('decoded :', decoded);
                    req.decoded = decoded;  
                    next();
                }
            });
        } else { 
            return res.status(403).send({ message: 'No token provided.'}); 
        }
    },
    addUser: (req, res, next) => {
        var newUser = new User({name: req.body.name, email: req.body.email});
        newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
        newUser.save()
        .then((usr) => {
            usr.hash_password = undefined;
            res.status(201).json(usr);
        })
        .catch((err) => {
            next(err);
        });
    }
};
