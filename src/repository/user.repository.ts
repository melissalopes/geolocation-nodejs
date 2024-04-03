import { UserReqDTO, UserRespDTO, UserUpdateReqDTO } from '../logic/dto';
import { UserModel } from './model';
import logger from '../utils/logger.util';

export class UserRepository {
    async create(data: UserReqDTO): Promise<UserRespDTO> {
        try {
            logger.info(
                `Calling UserRepository.create. ${JSON.stringify(data)}`
            );

            return await UserModel.create(data);
        } catch (error) {
            logger.error('Error in UserRepository.create', error);
            throw error;
        }
    }

    async find(id: number): Promise<UserRespDTO> {
        try {
            logger.info(`Calling UserRepository.find. ${JSON.stringify(id)}`);

            return await UserModel.findOne({ userId: id });
        } catch (error) {
            logger.error('Error in UserRepository.find', error);
            throw error;
        }
    }

    async update(data: UserUpdateReqDTO): Promise<any> {
        try {
            logger.info(
                `Calling UserRepository.update. ${JSON.stringify(data)}`
            );

            return await UserModel.findOneAndUpdate(
                { userId: data.id },
                { name: data.name },
                { new: true }
            );
        } catch (error) {
            logger.error('Error in UserRepository.update', error);
            throw error;
        }
    }

    async delete(id: number): Promise<any> {
        try {
            logger.info(`Calling UserRepository.delete. ${JSON.stringify(id)}`);

            return await UserModel.deleteOne({ userId: id });
        } catch (error) {
            logger.error('Error in UserRepository.delete', error);
            throw error;
        }
    }

    async list(): Promise<Array<UserRespDTO>> {
        try {
            logger.info('Calling UserRepository.list');

            return await UserModel.find();
        } catch (error) {
            logger.error('Error in UserRepository.list', error);
            throw error;
        }
    }
}
