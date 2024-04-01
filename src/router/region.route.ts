import * as app from 'express';
import { RegionHandler } from '../handler';

const regionRouter = app.Router();

const regionHandler = new RegionHandler();

regionRouter.post(
    '/',
    async (req, res) => await regionHandler.createHandle(req, res)
);

regionRouter.get(
    '/:id',
    async (req, res) => await regionHandler.getHandle(req, res)
);

regionRouter.patch(
    '/:id',
    async (req, res) => await regionHandler.updateHandle(req, res)
);

export default regionRouter;
