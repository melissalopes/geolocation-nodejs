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

            if (data.coordinates)
                data.address =
                    await this.geoService.getAddressFromCoordinates(
                        coordinates
                    );

            if (data.address)
                data.coordinates =
                    await this.geoService.getCoordinatesFromAddress(address);

            return await this.userRepository.create(data);
        } catch (error) {
            console.log('Error in UserLogic.create', error);
            throw error;
        }
    }
}
