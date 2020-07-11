const mongoose = require('mongoose');

// Conect to database
const connectionString = 'mongodb://localhost:27017/users';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check connection
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('We are connected!');
});

const init = require('./routes');
init.init();
