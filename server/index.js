const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dbConfig = require('./database/db');
const config = {
    autoIndex: true,
    useNewUrlParser: true
}

// Express Route
const productRoute = require('./routes/product.route');

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, config).then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Cannot connect to MongoDB', err))

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api', productRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../build/index.html"))
    })
}
// PORT
const port = process.env.POST || 4000;
app.listen(port, () => {
    console.log('Listening on port 4000');
});

// Error handler
app.use((err, req, res, next) => {
    console.log(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})