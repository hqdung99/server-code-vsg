const level1 = require('./level1');

const init = (server) => {
  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');

  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.listen(3000, function () {
    console.log('Listening to port 3000');
  });

  //   app.get('/', (req, res, next) => {
  //     res.send('Hello /');
  //     return next();
  //   });
  //   app.use('/haha', level1);
};

module.exports = {
  init: init,
};
