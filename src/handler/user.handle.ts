import { StatusCodes } from 'http-status-codes';
import { UserLogic } from '../logic';
import { UserSchema } from '../validator';
import { ValidationUtils } from '../utils';
import { UserSuccessMessagesConstants } from '../constant';

export class UserHandler {
    public async createHandle(req, res): Promise<void> {
        const payload = req.body;
        try {
            console.log('Calling UserHandler.createHandle', payload);

            ValidationUtils.validate(UserSchema.CREATE, payload);

            const logic = new UserLogic();
            const response = await logic.create(payload);

            const message = UserSuccessMessagesConstants.CREATED;
            console.log(`${message}`, response);

            res.status(StatusCodes.CREATED).json({ message, response });
        } catch (error) {
            console.log('Error in UserHandler.createHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }
}
