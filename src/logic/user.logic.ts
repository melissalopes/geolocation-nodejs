import { UserErrorMessagesConstants } from '../constant';
import { UserRepository } from '../repository';
import { GeocodeService } from '../service';
import { NotFound } from '../utils';
import { UserReqDTO, UserRespDTO, UserUpdateReqDTO } from './dto';
import logger from '../utils/logger.util';

export class UserLogic {
    private userRepository: UserRepository;
    private geoService: GeocodeService;

    constructor() {
        this.userRepository = new UserRepository();
        this.geoService = new GeocodeService();
    }

    async create(data: UserReqDTO): Promise<UserRespDTO> {
        const { address, coordinates } = data;
        try {
            logger.info(`Calling UserLogic.create. ${JSON.stringify(data)}`);

            if (!data.address)
                data.address =
                    await this.geoService.getAddressFromCoordinates(
                        coordinates
                    );

            if (!data.coordinates) {
                const resp =
                    await this.geoService.getCoordinatesFromAddress(address);
                data.coordinates = resp.geometry.location;
                data.address = resp.formatted_address;
            }

            return await this.userRepository.create(data);
        } catch (error) {
            logger.error('Error in UserLogic.create', error);
            throw error;
        }
    }

    async find(userId: number): Promise<any> {
        try {
            logger.info(`Calling UserLogic.find. ${JSON.stringify(userId)}`);

            const response = await this.userRepository.find(userId);

            if (!response)
                throw new NotFound(UserErrorMessagesConstants.NOT_FOUND);

            return response;
        } catch (error) {
            logger.error('Error in UserLogic.find', error);
            throw error;
        }
    }

    async update(data: UserUpdateReqDTO): Promise<any> {
        try {
            logger.info(`Calling UserLogic.update. ${JSON.stringify(data)}`);

            return await this.userRepository.update(data);
        } catch (error) {
            logger.error('Error in UserLogic.update', error);
            throw error;
        }
    }

    async delete(userId: number): Promise<any> {
        try {
            logger.info(`Calling UserLogic.delete. ${JSON.stringify(userId)}`);

            return await this.userRepository.delete(userId);
        } catch (error) {
            logger.error('Error in UserLogic.delete', error);
            throw error;
        }
    }

    async list(): Promise<Array<UserRespDTO>> {
        try {
            logger.info('Calling UserLogic.list');

            return await this.userRepository.list();
        } catch (error) {
            logger.error('Error in UserLogic.list', error);
            throw error;
        }
    }
}
