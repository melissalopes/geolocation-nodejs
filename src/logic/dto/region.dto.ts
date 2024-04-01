interface RegionDTO {
    regionId: number;
    userId: number;
    name: string;
}
export interface RegionReqDTO extends RegionDTO {}

export interface RegionRespDTO extends RegionDTO {}

export interface RegionUpdateReqDTO {
    id: number;
    name: string;
}
