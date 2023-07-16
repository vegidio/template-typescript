import winston from 'winston';
const { createLogger, format, transports } = winston;

const myFormat = format.printf(({ level, message, timestamp }) => {
    // The padding is 17 because there are invisible characters for the color
    const myLevel = `[${level}]`.padStart(17, ' ');
    return `${timestamp} ${myLevel}: ${message}`;
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
