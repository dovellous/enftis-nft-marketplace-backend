'use strict';

const { createLogger, format, transports } = require('winston');

const { combine, timestamp, label, printf } = format;

const myFormat = printf((params:any) => {
    const { level, message, label, timestamp }:any = params;
    return `${timestamp} [${label.toString().toUpperCase()}] [${level.toString().toUpperCase()}]: ${message}`;
});

const _logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        label({ label: 'ENFTIS' }),
        myFormat
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
        new transports.Console(),
    ],
});

const LoggerHelper = class LoggerClass {
    /* Private Instance Fields */

    isProduction;

    /* Constructor */

    constructor() {

        this.isProduction = parseInt(process.env.BACKEND_ROUTE_PREFIX||"") === 1;

    }

    /* Public Instance Methods */

    log(payload: any){
        _logger.info(payload)
    }

    debug(payload: any){
        _logger.debug(payload)
    }

    info(payload: any){
        _logger.info(payload)
    }

    success(payload: any){
        _logger.info(payload)
    }

    warn(payload: any){
        _logger.warn(payload)
    }

    error(payload: any){
        _logger.error(payload)
    }

}

const Logger = new LoggerHelper();

export {Logger, _logger};
