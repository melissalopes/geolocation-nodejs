import {
    ListPointRegionDTO,
    ListNearRegionDTO,
    RegionRespDTO,
    RegionUpdateReqDTO,
} from '../logic/dto';
import { RegionModel } from './model';

export class RegionRepository {
    async create(data: any): Promise<RegionRespDTO> {
        try {
            console.log('Calling RegionRepository.create', data);

            return await RegionModel.create(data);
        } catch (error) {
            console.log('Error in RegionRepository.create', error);
            throw error;
        }
    }

    async find(id: number): Promise<RegionRespDTO> {
        try {
            console.log('Calling RegionRepository.find', id);

            return await RegionModel.findOne({ regionId: id });
        } catch (error) {
            console.log('Error in RegionRepository.find', error);
            throw error;
        }
    }

    async update(data: RegionUpdateReqDTO): Promise<RegionRespDTO> {
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

    async list(): Promise<Array<RegionRespDTO>> {
        try {
            console.log('Calling RegionRepository.list');

            const result = await RegionModel.find();

            return result;
        } catch (error) {
            console.log('Error in RegionRepository.list', error);
            throw error;
        }
    }

    async listNearLocations(
        data: ListNearRegionDTO
    ): Promise<Array<RegionRespDTO>> {
        try {
            console.log('Calling RegionRepository.listNearLocations', data);

            const result = await RegionModel.find({
                location: {
                    $near: {
                        $geometry: {
                            type: 'Polygon',
                            coordinates: data.coordinates,
                        },
                    },
                },
            });

            return result;
        } catch (error) {
            console.log('Error in RegionRepository.listNearLocations', error);
            throw error;
        }
    }

    async listSpecificLocations(
        data: ListPointRegionDTO
    ): Promise<Array<RegionRespDTO>> {
        try {
            console.log('Calling RegionRepository.listSpecificLocations', data);

            const result = await RegionModel.find({
                location: {
                    $geoWithin: {
                        $geometry: {
                            type: 'Polygon',
                            coordinates: [data.coordinates],
                        },
                    },
                },
            });

            return result;
        } catch (error) {
            console.log(
                'Error in RegionRepository.listSpecificLocations',
                error
            );
            throw error;
        }
    }
}
