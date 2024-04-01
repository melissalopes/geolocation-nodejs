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

    async find(id: string): Promise<UserRespDTO> {
        try {
            console.log('Calling UserRepository.find', id);

            return await UserModel.findOne({ userId: id });
        } catch (error) {
            console.log('Error in UserRepository.find', error);
            throw error;
        }
    }

    async update(data: UserUpdateReqDTO): Promise<any> {
        try {
            console.log('Calling UserRepository.update', data);

            return await UserModel.findOneAndUpdate(
                { userId: data.id },
                { name: data.name },
                { new: true }
            );
        } catch (error) {
            console.log('Error in UserRepository.update', error);
            throw error;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            console.log('Calling UserRepository.delete', id);

            return await UserModel.deleteOne({ userId: id });
        } catch (error) {
            console.log('Error in UserRepository.delete', error);
            throw error;
        }
    }

    async list(): Promise<Array<UserRespDTO>> {
        try {
            console.log('Calling UserRepository.list');

            return await UserModel.find();
        } catch (error) {
            console.log('Error in UserRepository.list', error);
            throw error;
        }
    }
}
