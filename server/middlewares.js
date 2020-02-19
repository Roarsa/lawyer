const bodyParser =  require('body-parser');
var cors = require('cors')

module.exports = app => {
  app.use(cors({ origin: true }));
  app.use(bodyParser.json());
};
