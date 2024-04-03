export interface RegionReqDTO {
    userId?: number;
    regionId: number;
    name: string;
    user: string | unknown;
    type: string;
    coordinates: Array<[number, number]>;
}
export interface RegionRespDTO {
    regionId: number;
    name: string;
    user: string | unknown;
    location: {
        type: string;
        coordinates: Array<[[number, number]]>;
    };
}

export interface RegionUpdateReqDTO {
    id: number;
    name: string;
}

export interface ListNearRegionDTO {
    coordinates: Array<[number, number]>;
}

export interface ListPointRegionDTO {
    coordinates: Array<[[number, number]]>;
}
