import { StatusCodes } from 'http-status-codes';
import { UserLogic } from '../logic';
import { UserSchema } from '../validator';
import { ValidationUtils } from '../utils';
import { UserSuccessMessagesConstants } from '../constant';
import logger from '../utils/logger.util';

export class UserHandler {
    public async createHandle(req, res): Promise<void> {
        const payload = req.body;
        try {
            logger.info(
                `Calling UserHandler.createHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(UserSchema.CREATE, payload);

            const logic = new UserLogic();
            const response = await logic.create(payload);

            const message = UserSuccessMessagesConstants.CREATED;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.CREATED).json({ message, response });
        } catch (error) {
            logger.error('Error in UserHandler.createHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async getHandle(req, res): Promise<void> {
        const payload = req.params;
        try {
            logger.info(
                `Calling UserHandler.getHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(UserSchema.GET, payload);

            const logic = new UserLogic();
            const response = await logic.find(payload.id);

            const message = UserSuccessMessagesConstants.FOUND;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.OK).json({ message, response });
        } catch (error) {
            logger.error('Error in UserHandler.getHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async updateHandle(req, res): Promise<void> {
        const { id } = req.params;
        const { body } = req;
        try {
            const payload = { ...body, id };
            logger.info(
                `Calling UserHandler.updateHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(UserSchema.UPDATE, payload);

            const logic = new UserLogic();
            const response = await logic.update(payload);

            const message = UserSuccessMessagesConstants.UPDATED;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.CREATED).json({ message, response });
        } catch (error) {
            logger.error('Error in UserHandler.updateHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async deleteHandle(req, res): Promise<void> {
        const payload = req.params;
        try {
            logger.info(
                `Calling UserHandler.deleteHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(UserSchema.DELETE, payload);

            const logic = new UserLogic();
            const response = await logic.delete(payload.id);

            const message = UserSuccessMessagesConstants.DELETED;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.OK).json({ message, response });
        } catch (error) {
            logger.error('Error in UserHandler.deleteHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async getAllHandle(req, res): Promise<void> {
        try {
            logger.info('Calling UserHandler.getAllHandle.');

            const logic = new UserLogic();
            const response = await logic.list();

            const message = UserSuccessMessagesConstants.FOUND_LIST;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.OK).json({ message, response });
        } catch (error) {
            logger.error('Error in UserHandler.getAllHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }
}
