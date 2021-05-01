import winston from 'winston';
const { createLogger, format, transports } = winston;

const myFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.colorize(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        format.splat(),
        myFormat,
    ),
    transports: [new transports.Console()],
});

export default logger;
