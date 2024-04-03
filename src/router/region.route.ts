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

regionRouter.delete(
    '/:id',
    async (req, res) => await regionHandler.deleteHandle(req, res)
);

regionRouter.get(
    '/',
    async (req, res) => await regionHandler.getAllHandle(req, res)
);

regionRouter.get(
    '/coordinates/near',
    async (req, res) => await regionHandler.getNearLocationsHandle(req, res)
);

regionRouter.get(
    '/coordinates/point',
    async (req, res) => await regionHandler.getSpecificLocationsHandle(req, res)
);

export default regionRouter;
