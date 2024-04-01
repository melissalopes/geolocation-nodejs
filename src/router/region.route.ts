import * as app from 'express';
import { RegionHandler } from '../handler';

const regionRouter = app.Router();

const regionHandler = new RegionHandler();

regionRouter.post(
    '/',
    async (req, res) => await regionHandler.createHandle(req, res)
);

export default regionRouter;
