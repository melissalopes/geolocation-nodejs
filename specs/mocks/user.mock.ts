export class UserMock {
    public static createWithAddress = {
        userId: 1,
        name: 'Roberto',
        email: 'roberto.lopes@gmail.com',
        address: 'Maria Aparecida Datovo, 478',
    };

    public static createWithCoordinates = {
        userId: 1,
        name: 'Roberto',
        email: 'roberto.lopes@gmail.com',
        coordinates: {
            lat: -23.513803,
            lng: -46.3684184,
        },
    };
}
