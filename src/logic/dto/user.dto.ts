interface UserDTO {
    userId: string;
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
