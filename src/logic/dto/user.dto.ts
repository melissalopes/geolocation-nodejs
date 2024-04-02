interface UserDTO {
    userId: number;
    name: string;
    email: string;
    address?: string;
    coordinates?: { lat: number; lng: number };
}
export interface UserReqDTO extends UserDTO {}

export interface UserRespDTO extends UserDTO {
    _id?: string;
}

export interface UserUpdateReqDTO {
    id: number;
    name: string;
}
