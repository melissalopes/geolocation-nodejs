export class UserIntegrationTestMock {
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

export class UserUnitTestMock {
    public static CREATE = {
        userId: 1,
        name: 'Roberto',
        email: 'roberto.lopes@gmail.com',
        address:
            'Av. Maria Aparecida Datovo, 478 - Cidade Kemel, Ferraz de Vasconcelos - SP, 08542-170, Brazil',
        coordinates: {
            lat: -23.513803,
            lng: -46.3684184,
        },
    };
}
