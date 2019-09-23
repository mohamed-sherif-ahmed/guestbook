const Reply = require('./../models/reply');

module.exports = {
    replyToMessage: (req, res, next) => {
        const owner = req.decoded;
        const messageID = req.body.mID;

        var nReply = new Reply({owner: owner, message: messageID, text: req.body.text});
        nReply.save()
        .then((nR) => {
            res.status(201).json(nR);
        })
        .catch((err) => {
            next(err);
        });

    }
};
