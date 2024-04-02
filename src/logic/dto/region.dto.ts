interface RegionDTO {
    regionId: number;
    name: string;
    user: string | unknown;
    type: string;
    coordinates: Array<number>;
}
export interface RegionReqDTO extends RegionDTO {
    userId?: number;
}

export interface RegionRespDTO extends RegionDTO {}

export interface RegionUpdateReqDTO {
    id: number;
    name: string;
}

export interface ListRegionDTO {
    coordinates: [number, number];
}
