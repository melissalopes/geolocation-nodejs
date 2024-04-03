import mongoose from 'mongoose';
import { DatabaseEnvs } from './envs';
import logger from '../utils/logger.util';

export class DatabaseConfig {
    async connect(): Promise<void> {
        try {
            logger.info(`Connecting to database URI: ${DatabaseEnvs.URI}`);
            await mongoose.connect(DatabaseEnvs.URI, {
                serverSelectionTimeoutMS: 5000,
                dbName: DatabaseEnvs.DATABASE,
            });
            logger.info('Database successfully connected!');
        } catch (error) {
            logger.error('Could not connect to database:', error);
            throw error;
        }
    }
}
