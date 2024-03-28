export class GeoService {
    async getAddressFromCoordinates(
        coordinates: [number, number] | { lat: number; lng: number }
    ): Promise<string> {
        try {
            //
        } catch (error) {
            return Promise.reject(new Error('Not implemented'));
        }
    }

    async getCoordinatesFromAddress(
        address: string
    ): Promise<{ lat: number; lng: number }> {
        try {
            //
        } catch (error) {
            return Promise.reject(new Error('Not implemented'));
        }
    }
}
