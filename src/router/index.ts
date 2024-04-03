import * as app from 'express';
import userRouter from './user.route';
import regionRouter from './region.route';

const routes = app.Router();

routes.use('/users', userRouter);
routes.use('/regions', regionRouter);

export default routes;
