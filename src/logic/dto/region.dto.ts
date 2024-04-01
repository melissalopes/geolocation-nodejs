interface RegionDTO {
    regionId: string;
    userId: string;
    name: string;
}
export interface RegionReqDTO extends RegionDTO {}

export interface RegionRespDTO extends RegionDTO {}

export interface RegionUpdateReqDTO {
    id: string;
    name: string;
}
