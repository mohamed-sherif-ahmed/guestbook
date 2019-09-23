const Message = require('./../models/message');

module.exports = {
    addMessage: (req, res, next) => {
        let newMessage = new Category({owner: req.decoded, text: req.body.text});
        newMessage.save()
        .then((mes) => {
            res.status(201).json(mes);
        })
        .catch((err) => {
            next(err);
        });
    },
    editMessage: (req, res, next) => {
        const id = req.body._id;
        const updatedFields = req.body.updates;
        Message.findOneAndUpdate({_id: id}, {$set: updatedFields}).exec()
        .then((doc) => {
            res.status(200).json(doc);
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
        Message.find().exec()
        .then((messages) => {
            res.status(200).json(messages);
        })
        .catch((err) => {
            next(err);
        });
    }
};
