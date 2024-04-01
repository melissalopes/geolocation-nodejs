import * as app from 'express';
import { UserHandler } from '../handler';

const userRouter = app.Router();

const userHandler = new UserHandler();

userRouter.post(
    '/',
    async (req, res) => await userHandler.createHandle(req, res)
);

export default userRouter;
