var winston = require('winston');

var config = require('./config');
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
        level: config.log_level,
        colorize: true
    })
  ]
});

module.exports = logger;
