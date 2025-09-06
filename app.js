const express = require('express');
require('dotenv').config();
const healthCheck = require('./controllers/healthchecks');
const logger = require('./middleware/logger');
const tokenverification = require('./middleware/jwt');
const app = express();
const port = process.env.port;
const proxy = require('express-http-proxy');

console.log(process.env.slave_url);

app.use(logger); //middleware logger

//app.use(tokenverification); //middleware authenticator

app.use('/slave', proxy(process.env.slave_url));

app.use('/', healthCheck);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});