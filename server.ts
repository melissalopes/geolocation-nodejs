import * as app from 'express';
import { ServerEnvs } from './src/config/envs';
import { DatabaseConfig } from './src/config';
import routes from './src/router/index';

const server = app();

const dataBaseConfig = new DatabaseConfig();
dataBaseConfig.connect();

server.use('/api', routes);

server.listen(ServerEnvs.PORT, async () => console.log('Server online'));
