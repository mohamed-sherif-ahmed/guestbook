const Message = require('./../models/message');
const User = require('./../models/user');

module.exports = {
    addMessage: (req, res, next) => {
        console.log("USER ID", req.decoded);
        let newMessage = new Message({owner: req.decoded.userID, text: req.body.text});
        newMessage.save()
        .then((mes) => {
            User.findById(mes.owner).exec().then(usr => {
                console.log("inside void", usr);
                var m = mes.toJSON();
                m.owner = {name: usr.name};
                res.status(201).json(m);
            });
        })
        .catch((err) => {
            next(err);
        });
    },
    editMessage: (req, res, next) => {
        console.log("BOOOOD", req.body);
        const id = req.body.id;
        const updatedFields = req.body.updates;
        console.log("EDELOOO", updatedFields)
        Message.findById(id).exec()
        .then((doc) => {
            doc.text = updatedFields.text;
            doc.save().then(msg => {
                res.status(200).json(msg);
            });
        })
        .catch((err) => {
            next(err);
        });
    },
    deleteMessage: (req, res, next) => {
        Message.findByIdAndDelete(req.params.id).exec()
        .then(() => {
            res.json({id: req.params.id});
        })
        .catch((err) => {
            next(err);
        });
    },
    getMessages: (req, res, next) => {
        Message.find().populate({
            path: 'owner',
            select: 'name -_id'
        }).exec()
        .then((messages) => {
            res.status(200).json(messages);
        })
        .catch((err) => {
            next(err);
        });
    }
};
