import { UserReqDTO, UserRespDTO, UserUpdateReqDTO } from '../logic/dto';
import { UserModel } from './model';

export class UserRepository {
    async create(data: UserReqDTO): Promise<UserRespDTO> {
        try {
            console.log('Calling UserRepository.create', data);

            return await UserModel.create(data);
        } catch (error) {
            console.log('Error in UserRepository.create', error);
            throw error;
        }
    }
}
