import { UserErrorMessagesConstants } from '../constant';
import { UserRepository } from '../repository';
import { GeocodeService } from '../service';
import { BadRequest, NotFound } from '../utils';
import { UserReqDTO, UserRespDTO, UserUpdateReqDTO } from './dto';

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
            console.log('Calling UserLogic.create', data);

            if (!data.address)
                data.address =
                    await this.geoService.getAddressFromCoordinates(
                        coordinates
                    );

            if (!data.coordinates)
                data.coordinates =
                    await this.geoService.getCoordinatesFromAddress(address);

            return await this.userRepository.create(data);
        } catch (error) {
            console.log('Error in UserLogic.create', error);
            throw error;
        }
    }

    async find(userId: string): Promise<any> {
        try {
            console.log('Calling UserLogic.find', userId);

            const response = await this.userRepository.find(userId);

            if (!response)
                throw new NotFound(UserErrorMessagesConstants.NOT_FOUND);

            return response;
        } catch (error) {
            console.log('Error in UserLogic.find', error);
            throw error;
        }
    }

    async update(data: UserUpdateReqDTO): Promise<any> {
        try {
            console.log('Calling UserLogic.update', data);

            return await this.userRepository.update(data);
        } catch (error) {
            console.log('Error in UserLogic.update', error);
            throw error;
        }
    }

    async delete(userId: string): Promise<any> {
        try {
            console.log('Calling UserLogic.delete', userId);

            return await this.userRepository.delete(userId);
        } catch (error) {
            console.log('Error in UserLogic.delete', error);
            throw error;
        }
    }

    async list(): Promise<Array<UserRespDTO>> {
        try {
            console.log('Calling UserLogic.list');

            return await this.userRepository.list();
        } catch (error) {
            console.log('Error in UserLogic.list', error);
            throw error;
        }
    }
}
