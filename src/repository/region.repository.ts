import { RegionUpdateReqDTO, UserRespDTO } from '../logic/dto';
import { RegionModel } from './model';

export class RegionRepository {
    async create(data: any): Promise<any> {
        try {
            console.log('Calling RegionRepository.create', data);

            return await RegionModel.create(data);
        } catch (error) {
            console.log('Error in RegionRepository.create', error);
            throw error;
        }
    }

    async find(id: number): Promise<any> {
        try {
            console.log('Calling RegionRepository.find', id);

            return await RegionModel.findOne({ regionId: id });
        } catch (error) {
            console.log('Error in RegionRepository.find', error);
            throw error;
        }
    }

    async update(data: RegionUpdateReqDTO): Promise<any> {
        try {
            console.log('Calling RegionRepository.update', data);

            return await RegionModel.findOneAndUpdate(
                { regionId: data.id },
                { name: data.name },
                { new: true }
            );
        } catch (error) {
            console.log('Error in RegionRepository.update', error);
            throw error;
        }
    }

    async delete(id: number): Promise<any> {
        try {
            console.log('Calling RegionRepository.delete', id);

            return await RegionModel.deleteOne({ regionId: id });
        } catch (error) {
            console.log('Error in RegionRepository.delete', error);
            throw error;
        }
    }
}
