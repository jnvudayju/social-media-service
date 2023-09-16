const winston = require('winston');

class Logger {
    constructor(route) {
        this.route = route;

        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'out.log' })
            ],
            format: winston.format.printf((info) => {
                const offset = new Date().getTimezoneOffset();
                const date = new Date(Date.now() - offset * 60 * 1000).toISOString();

                let message = `${date} | ${info.level.toUpperCase()} | ${route}.log | ${info.message}`
                message = info.data ? message + ` | data: ${JSON.stringify(info.data)}` : message
                return message
            })
        });
    }

    async debug(message) {
        this.logger.log('debug', message);
    }

    async debug(message, data) {
        this.logger.log('debug', message, { data });
    }

    async info(message) {
        this.logger.log('info', message);
    }

    async info(message, data) {
        this.logger.log('info', message, { data });
    }

    async error(message) {
        this.logger.log('error', message);
    }

    async error(message, data) {
        this.logger.log('error', message, { data });
    }
}

module.exports = Logger;