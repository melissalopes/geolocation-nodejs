export class RegionMock {
    public static create = {
        regionId: 1,
        name: 'Teste',
        userId: 1,
        coordinates: [
            [0, 0],
            [10, 10],
            [10, 0],
            [0, 0],
        ],
    };

    public static listNear = { coordinates: [0, 0] };

    public static listPoint = {
        coordinates: [
            [0, 0],
            [10, 10],
            [10, 0],
            [0, 0],
        ],
    };
}
