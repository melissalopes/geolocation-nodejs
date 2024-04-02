import { StatusCodes } from 'http-status-codes';
import * as supertest from 'supertest';
import server from '../../server';
import { RegionIntegrationTestMock } from '../mocks';
import { RegionSuccessMessagesConstants } from '../../src/constant';

// ! Implementing tests with Jest
describe('Region integration tests', () => {
    let initServer;

    beforeEach(() => {
        initServer = supertest(server);
    });

    it('Should create a region', async () => {
        const response = await initServer
            .post('/api/regions/')
            .send(RegionIntegrationTestMock.create);

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.CREATED);
        expect(response._body.message).toEqual(
            RegionSuccessMessagesConstants.CREATED
        );
    });

    it('Should get a region and return correct status code', async () => {
        const response = await initServer
            .get(`/api/regions/${Number(1)}`)
            .send({}, { id: 1 });

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response._body.message).toEqual(
            RegionSuccessMessagesConstants.FOUND
        );
    });

    it('Should update a region and return correct status code', async () => {
        const response = await initServer
            .patch(`/api/regions/${Number(1)}`)
            .send({ name: 'Teste2' }, { id: 1 });

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.CREATED);
        expect(response._body.message).toEqual(
            RegionSuccessMessagesConstants.UPDATED
        );
        expect(response._body.response.name).toBe('Teste2');
    });

    it('Should delete a region and return correct status code', async () => {
        const response = await initServer
            .delete(`/api/regions/${Number(1)}`)
            .send({}, { id: 1 });

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response._body.message).toEqual(
            RegionSuccessMessagesConstants.DELETED
        );
    });

    it('Should return a list of regions and correct status code', async () => {
        const response = await initServer.get(`/api/regions/`).send({});

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response._body.message).toEqual(
            RegionSuccessMessagesConstants.FOUND_LIST
        );
    });

    it('Should return a list (of locations nearby a point) and correct status code', async () => {
        const response = await initServer
            .get(`/api/regions/coordinates/near`)
            .send({ coordinates: [-40.99279, 20.719296] }, {});

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response._body.message).toEqual(
            RegionSuccessMessagesConstants.FOUND_LIST
        );
    });

    it('Should return a list (of a specific location from a point) and correct status code', async () => {
        const response = await initServer
            .get(`/api/regions/coordinates/point`)
            .send({ coordinates: [-46.3684184, -23.513803] }, {});

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response._body.message).toEqual(
            RegionSuccessMessagesConstants.FOUND_LIST
        );
    });
});
