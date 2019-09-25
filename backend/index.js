const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const apiRouter = require('./routes/api');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/api', apiRouter);

mongoose.connect("mongodb://172.17.0.1:27017/guestbook", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("DB Connected!");
    app.listen(3001, () => {
        console.log('Server started on port 3001');
    });
})
.catch((err) => {
    console.log("couldnt Connect to DB");
    console.log(err);
});
