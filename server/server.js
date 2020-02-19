const express = require('express');
const chalk =  require('chalk');

module.exports = (port, ...middlewares) => {
  const app = express();

  middlewares.forEach(middleware => middleware(app));

  if (port) {
    app.listen(port, err => {
      const url = `http://localhost:${port}`;

      if (err) {
        console.error(`==> 😭  OMG!!! ${err}`);
      }

      console.info(chalk.green(`==> 🌎  Listening at ${url}`));
    });
  } else {
    console.error(
      chalk.red(
        '==> 😭  OMG!!! No PORT environment variable has been specified'
      )
    );
  }
};
