import * as app from 'express';

const regionRouter = app.Router();

regionRouter.get('/', async (req, res) => {
    res.json('test regionRouter');
});

export default regionRouter;
