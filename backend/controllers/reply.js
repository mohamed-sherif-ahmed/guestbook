const Reply = require('./../models/reply');
const User = require('./../models/user');
module.exports = {
    replyToMessage: (req, res, next) => {
        const owner = req.decoded.userID;
        const messageID = req.body.mID;

        var nReply = new Reply({owner: owner, message: messageID, text: req.body.text});
        nReply.save()
        .then((nR) => {
            User.findById(nR.owner).exec().then(usr => {
                console.log("inside void", usr);
                var m = nR.toJSON();
                m.owner = {name: usr.name};
                res.status(201).json(m);
            });
        })
        .catch((err) => {
            next(err);
        });
    },
    getReplies: (req, res, next) => {
        const forMessage = req.params.id;

        Reply.find({message: forMessage}).populate({
            path: 'owner',
            select: 'name -_id'
        }).exec()
        .then(replies => {
            res.status(200).json(replies);
        })
        .catch(err => {
            next(err);
        })
    }
};
