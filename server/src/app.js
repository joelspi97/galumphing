const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('appPort', process.env.PORT || 3000);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/art-pieces', require('./routes/artPieces.routes'));

module.exports = app;
