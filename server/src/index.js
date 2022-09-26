const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.DBURI;
const appPort = app.get('appPort');

mongoose.connect(dbURI)
  .then(db => app.listen(appPort, () => console.log(`Server listening on port ${appPort}`)))
  .catch(err => console.error(err));
