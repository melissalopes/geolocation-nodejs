import * as app from 'express';
import userRouter from './user.route';
import regionRouter from './region.route';

const routes = app.Router();

routes.use('/user', userRouter);
routes.use('/region', regionRouter);

export default routes;
