import {
    ListPointRegionDTO,
    ListNearRegionDTO,
    RegionRespDTO,
    RegionUpdateReqDTO,
} from '../logic/dto';
import { RegionModel } from './model';
import logger from '../utils/logger.util';

export class RegionRepository {
    async create(data: any): Promise<RegionRespDTO> {
        try {
            logger.info(
                `Calling RegionRepository.create. ${JSON.stringify(data)}`
            );

            return await RegionModel.create(data);
        } catch (error) {
            logger.error('Error in RegionRepository.create', error);
            throw error;
        }
    }

    async find(id: number): Promise<RegionRespDTO> {
        try {
            logger.info(`Calling RegionRepository.find. ${JSON.stringify(id)}`);

            return await RegionModel.findOne({ regionId: id });
        } catch (error) {
            logger.error('Error in RegionRepository.find', error);
            throw error;
        }
    }

    async update(data: RegionUpdateReqDTO): Promise<RegionRespDTO> {
        try {
            logger.info(
                `Calling RegionRepository.update. ${JSON.stringify(data)}`
            );

            return await RegionModel.findOneAndUpdate(
                { regionId: data.id },
                { name: data.name },
                { new: true }
            );
        } catch (error) {
            logger.error('Error in RegionRepository.update', error);
            throw error;
        }
    }

    async delete(id: number): Promise<any> {
        try {
            logger.info(
                `Calling RegionRepository.delete. ${JSON.stringify(id)}`
            );

            return await RegionModel.deleteOne({ regionId: id });
        } catch (error) {
            logger.error('Error in RegionRepository.delete', error);
            throw error;
        }
    }

    async list(): Promise<Array<RegionRespDTO>> {
        try {
            logger.info('Calling RegionRepository.list');

            const result = await RegionModel.find();

            return result;
        } catch (error) {
            logger.error('Error in RegionRepository.list', error);
            throw error;
        }
    }

    async listNearLocations(
        data: ListNearRegionDTO
    ): Promise<Array<RegionRespDTO>> {
        try {
            logger.info(
                `Calling RegionRepository.listNearLocations. ${JSON.stringify(data)}`
            );

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
            logger.error('Error in RegionRepository.listNearLocations', error);
            throw error;
        }
    }

    async listSpecificLocations(
        data: ListPointRegionDTO
    ): Promise<Array<RegionRespDTO>> {
        try {
            logger.info(
                `Calling RegionRepository.listSpecificLocations. ${JSON.stringify(data)}`
            );

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
            logger.error(
                'Error in RegionRepository.listSpecificLocations',
                error
            );
            throw error;
        }
    }
}
