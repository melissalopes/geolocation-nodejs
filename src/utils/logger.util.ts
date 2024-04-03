import * as winston from 'winston';

const { combine, timestamp, json, prettyPrint, printf, colorize } =
    winston.format;

const logger = () => {
    return winston.createLogger({
        level: 'info',
        format: combine(
            colorize({ all: true }),
            timestamp({ format: 'HH:mm:ss' }),
            json(),
            prettyPrint(),
            printf(
                ({ level, message, timestamp }) =>
                    `[${timestamp}] [${level}] : ${message}`
            )
        ),
        transports: [new winston.transports.Console()],
    });
};

export default logger();
