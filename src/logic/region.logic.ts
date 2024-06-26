import * as GeoJson from 'geojson';
import { RegionRepository, UserRepository } from '../repository';
import {
    ListPointRegionDTO,
    ListNearRegionDTO,
    RegionReqDTO,
    RegionRespDTO,
    RegionUpdateReqDTO,
} from './dto';
import { NotFound } from '../utils';
import {
    UserErrorMessagesConstants,
    RegionErrorMessagesConstants,
} from '../constant';
import logger from '../utils/logger.util';

export class RegionLogic {
    private regionRepository: RegionRepository;
    private userRepository: UserRepository;

    constructor() {
        this.regionRepository = new RegionRepository();
        this.userRepository = new UserRepository();
    }

    async create(data: RegionReqDTO): Promise<RegionRespDTO> {
        const { regionId, name, userId } = data;
        try {
            logger.info(`Calling RegionLogic.create. ${JSON.stringify(data)}`);

            const user = await this.userRepository.find(userId);

            if (!user) throw new NotFound(UserErrorMessagesConstants.NOT_FOUND);

            const region = GeoJson.parse(data, {
                Polygon: 'coordinates',
            });

            return await this.regionRepository.create({
                regionId,
                user: user._id,
                name,
                location: {
                    type: region.geometry.type,
                    coordinates: [region.geometry.coordinates],
                },
            });
        } catch (error) {
            logger.error('Error in RegionLogic.create', error);
            throw error;
        }
    }

    async find(regionId: number): Promise<RegionRespDTO> {
        try {
            logger.info(
                `Calling RegionLogic.find. ${JSON.stringify(regionId)}`
            );

            const response = await this.regionRepository.find(regionId);

            if (!response)
                throw new NotFound(RegionErrorMessagesConstants.NOT_FOUND);

            return response;
        } catch (error) {
            logger.error('Error in RegionLogic.find', error);
            throw error;
        }
    }

    async update(data: RegionUpdateReqDTO): Promise<RegionRespDTO> {
        try {
            logger.info(`Calling RegionLogic.update. ${JSON.stringify(data)}`);

            return await this.regionRepository.update(data);
        } catch (error) {
            logger.error('Error in RegionLogic.update', error);
            throw error;
        }
    }

    async delete(regionId: number): Promise<any> {
        try {
            logger.info(
                `Calling RegionLogic.delete. ${JSON.stringify(regionId)}`
            );

            const response = await this.regionRepository.delete(regionId);

            if (!response.deletedCount)
                throw new NotFound(RegionErrorMessagesConstants.ID_NOT_FOUND);

            return response;
        } catch (error) {
            logger.error('Error in RegionLogic.delete', error);
            throw error;
        }
    }

    async list(): Promise<Array<RegionRespDTO>> {
        try {
            logger.info('Calling RegionLogic.list');

            const response = await this.regionRepository.list();

            if (!response.length)
                throw new NotFound(RegionErrorMessagesConstants.LIST_NOT_FOUND);

            return response;
        } catch (error) {
            logger.error('Error in RegionLogic.list', error);
            throw error;
        }
    }

    async listNearLocations(
        data: ListNearRegionDTO
    ): Promise<Array<RegionRespDTO>> {
        try {
            logger.info(
                `Calling RegionLogic.listNearLocations. ${JSON.stringify(data)}`
            );

            const response =
                await this.regionRepository.listNearLocations(data);

            if (!response.length)
                throw new NotFound(RegionErrorMessagesConstants.LIST_NOT_FOUND);

            return await this.regionRepository.listNearLocations(data);
        } catch (error) {
            logger.error('Error in RegionLogic.listNearLocations', error);
            throw error;
        }
    }

    async listSpecificLocations(
        data: ListPointRegionDTO
    ): Promise<Array<RegionRespDTO>> {
        try {
            logger.info(
                `Calling RegionLogic.listSpecificLocations. ${JSON.stringify(data)}`
            );

            const response =
                await this.regionRepository.listSpecificLocations(data);

            if (!response.length)
                throw new NotFound(RegionErrorMessagesConstants.LIST_NOT_FOUND);

            return await this.regionRepository.listSpecificLocations(data);
        } catch (error) {
            logger.error('Error in RegionLogic.listSpecificLocations', error);
            throw error;
        }
    }
}
