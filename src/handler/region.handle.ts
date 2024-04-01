import { StatusCodes } from 'http-status-codes';
import { RegionLogic } from '../logic';
import { RegionSchema } from '../validator';
import { ValidationUtils } from '../utils';
import { RegionSuccessMessagesConstants } from '../constant';

export class RegionHandler {
    public async createHandle(req, res): Promise<void> {
        const payload = req.body;
        try {
            console.log('Calling RegionHandler.createHandle', payload);

            ValidationUtils.validate(RegionSchema.CREATE, payload);

            const logic = new RegionLogic();
            const response = await logic.create(payload);

            const message = RegionSuccessMessagesConstants.CREATED;
            console.log(`${message}`, response);

            res.status(StatusCodes.CREATED).json({ message, response });
        } catch (error) {
            console.log('Error in RegionHandler.createHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }
}
