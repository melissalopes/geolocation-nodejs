import { StatusCodes } from 'http-status-codes';
import { RegionLogic } from '../logic';
import { RegionSchema } from '../validator';
import { ValidationUtils } from '../utils';
import { RegionSuccessMessagesConstants } from '../constant';
import logger from '../utils/logger.util';

export class RegionHandler {
    public async createHandle(req, res): Promise<void> {
        const payload = req.body;
        try {
            logger.info(
                `Calling RegionHandler.createHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(RegionSchema.CREATE, payload);

            const logic = new RegionLogic();
            const response = await logic.create(payload);

            const message = RegionSuccessMessagesConstants.CREATED;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.CREATED).json({ message, response });
        } catch (error) {
            logger.error('Error in RegionHandler.createHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async getHandle(req, res): Promise<void> {
        const payload = req.params;
        try {
            logger.info(
                `Calling RegionHandler.getHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(RegionSchema.GET, payload);

            const logic = new RegionLogic();
            const response = await logic.find(payload.id);

            const message = RegionSuccessMessagesConstants.FOUND;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.OK).json({ message, response });
        } catch (error) {
            logger.error('Error in RegionHandler.getHandle', error);

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
                `Calling RegionHandler.updateHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(RegionSchema.UPDATE, payload);

            const logic = new RegionLogic();
            const response = await logic.update(payload);

            const message = RegionSuccessMessagesConstants.UPDATED;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.CREATED).json({ message, response });
        } catch (error) {
            logger.error('Error in RegionHandler.updateHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async deleteHandle(req, res): Promise<void> {
        const payload = req.params;
        try {
            logger.info(
                `Calling RegionHandler.deleteHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(RegionSchema.DELETE, payload);

            const logic = new RegionLogic();
            const response = await logic.delete(payload.id);

            const message = RegionSuccessMessagesConstants.DELETED;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.OK).json({ message, response });
        } catch (error) {
            logger.error('Error in RegionHandler.deleteHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async getAllHandle(req, res): Promise<void> {
        try {
            logger.info('Calling RegionHandler.getAllHandle');

            const logic = new RegionLogic();
            const response = await logic.list();

            const message = RegionSuccessMessagesConstants.FOUND_LIST;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.OK).json({ message, response });
        } catch (error) {
            logger.error('Error in RegionHandler.getAllHandle', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async getNearLocationsHandle(req, res): Promise<void> {
        const payload = req.body;
        try {
            logger.info(
                `Calling RegionHandler.getNearLocationsHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(RegionSchema.LIST_NEAR, payload);

            const logic = new RegionLogic();
            const response = await logic.listNearLocations(payload);

            const message = RegionSuccessMessagesConstants.FOUND_LIST;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.OK).json({ message, response });
        } catch (error) {
            logger.error(
                'Error in RegionHandler.getNearLocationsHandle',
                error
            );

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }

    public async getSpecificLocationsHandle(req, res): Promise<void> {
        const payload = req.body;
        try {
            logger.info(
                `Calling RegionHandler.getSpecificLocationsHandle. ${JSON.stringify(payload)}`
            );

            ValidationUtils.validate(RegionSchema.LIST_POINT, payload);

            const logic = new RegionLogic();
            const response = await logic.listSpecificLocations(payload);

            const message = RegionSuccessMessagesConstants.FOUND_LIST;
            logger.info(`${message} ${JSON.stringify(response)}`);

            res.status(StatusCodes.OK).json({ message, response });
        } catch (error) {
            logger.error(
                'Error in RegionHandler.getSpecificLocationsHandle',
                error
            );

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }
}
