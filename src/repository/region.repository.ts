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
}
