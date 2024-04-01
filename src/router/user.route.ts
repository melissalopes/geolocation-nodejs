import * as app from 'express';
import { UserHandler } from '../handler';

const userRouter = app.Router();

const userHandler = new UserHandler();

userRouter.post(
    '/',
    async (req, res) => await userHandler.createHandle(req, res)
);

userRouter.get(
    '/:id',
    async (req, res) => await userHandler.getHandle(req, res)
);

userRouter.patch(
    '/:id',
    async (req, res) => await userHandler.updateHandle(req, res)
);

userRouter.delete(
    '/:id',
    async (req, res) => await userHandler.deleteHandle(req, res)
);

export default userRouter;
