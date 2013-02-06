
// Add uncaught-exception handler in prod-like environments
// if (geddy.config.environment != 'development') {
//   process.addListener('uncaughtException', function (err) {
//     var msg = err.message;
//     if (err.stack) {
//       msg += '\n' + err.stack;
//     }
//     if (!msg) {
//       msg = JSON.stringify(err);
//     }
//     geddy.log.error(msg);
//   });
// }



var winston = require('winston');
geddy.logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ level: geddy.config.logLevel, colorize: geddy.config.logColorConsoleOutput, timestamp: true, trace: true }),
  ]
});