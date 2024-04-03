import { Client } from '@googlemaps/google-maps-services-js';
import { GeocodeEnvs } from '../config/envs';
import logger from '../utils/logger.util';

export class GeocodeService {
    private clientMaps: Client;

    constructor() {
        this.clientMaps = new Client();
    }

    async getCoordinatesFromAddress(address: string): Promise<any> {
        try {
            const response = await this.clientMaps.geocode({
                params: {
                    address,
                    key: GeocodeEnvs.API_KEY,
                },
            });

            return response.data.results[0];
        } catch (error) {
            logger.error(
                'Error in GeocodeService.getCoordinatesFromAddress',
                error
            );
            throw error;
        }
    }

    async getAddressFromCoordinates(latlng: {
        lat: number;
        lng: number;
    }): Promise<string> {
        try {
            const response = await this.clientMaps.reverseGeocode({
                params: {
                    latlng,
                    key: GeocodeEnvs.API_KEY,
                },
            });

            return response.data.results[0].formatted_address;
        } catch (error) {
            logger.error(
                'Error in GeocodeService.getAddressFromCoordinates',
                error
            );
            throw error;
        }
    }
}
