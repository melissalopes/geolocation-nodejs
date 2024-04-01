interface UserDTO {
    _id?: string;
    userId: number;
    name: string;
    email: string;
    address?: string;
    coordinates?: { lat: number; lng: number };
}
export interface UserReqDTO extends UserDTO {}

export interface UserRespDTO extends UserDTO {}

export interface UserUpdateReqDTO {
    id: string;
    name: string;
}
