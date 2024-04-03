import { StatusCodes } from 'http-status-codes';
import * as supertest from 'supertest';
import server from '../../server';
import { UserMock, RegionMock } from '../mocks';
import {
    UserSuccessMessagesConstants,
    RegionSuccessMessagesConstants,
} from '../../src/constant';

const initServer = supertest(server);

// ! Implementing tests with Jest
describe('User integration tests', () => {
    it('Should create an user w/ address and return correct status code', async () => {
        const response = await initServer
            .post(`/api/users`)
            .send(UserMock.createWithAddress);

        expect(response.statusCode).toEqual(StatusCodes.CREATED);
        expect(response.body.message).toEqual(
            UserSuccessMessagesConstants.CREATED
        );
        expect(response.body.response.address).toBeDefined();
        expect(response.body.response.coordinates).toBeDefined();
    });

    it('Should create an user w/ coordinates and return correct status code', async () => {
        const response = await initServer
            .post(`/api/users`)
            .send(UserMock.createWithCoordinates);

        expect(response.statusCode).toEqual(StatusCodes.CREATED);
        expect(response.body.message).toEqual(
            UserSuccessMessagesConstants.CREATED
        );
        expect(response.body.response.address).toBeDefined();
        expect(response.body.response.coordinates).toBeDefined();
    });

    it('Should get an user and return correct status code', async () => {
        const response = await initServer
            .get(`/api/users/${Number(1)}`)
            .send({});

        expect(response.statusCode).toEqual(StatusCodes.OK);
        expect(response.body.message).toEqual(
            UserSuccessMessagesConstants.FOUND
        );
    });

    it('Should update an user and return correct status code', async () => {
        const response = await initServer
            .patch(`/api/users/${Number(1)}`)
            .send({ name: 'Julia' });

        expect(response.statusCode).toEqual(StatusCodes.CREATED);
        expect(response.body.message).toEqual(
            UserSuccessMessagesConstants.UPDATED
        );
        expect(response.body.response.name).toBe('Julia');
    });

    it('Should return a list of users and correct status code', async () => {
        const response = await initServer.get(`/api/users/`).send();

        expect(response.statusCode).toEqual(StatusCodes.OK);
        expect(response.body.message).toEqual(
            UserSuccessMessagesConstants.FOUND_LIST
        );
        expect(response.body.response).toBeDefined();
    });

    it('Should delete an user and return correct status code', async () => {
        const response = await initServer
            .delete(`/api/users/${Number(1)}`)
            .send({});

        expect(response.statusCode).toEqual(StatusCodes.OK);
        expect(response.body.message).toEqual(
            UserSuccessMessagesConstants.DELETED
        );
        expect(response.body.response).toBeDefined();
    });
});

describe('Region integration tests', () => {
    it('Should create a region', async () => {
        const response = await initServer
            .post('/api/regions/')
            .send(RegionMock.create);

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.CREATED);
        expect(response.body.message).toEqual(
            RegionSuccessMessagesConstants.CREATED
        );
    });

    it('Should get a region and return correct status code', async () => {
        const response = await initServer
            .get(`/api/regions/${Number(1)}`)
            .send({});

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response.body.message).toEqual(
            RegionSuccessMessagesConstants.FOUND
        );
    });

    it('Should update a region and return correct status code', async () => {
        const response = await initServer
            .patch(`/api/regions/${Number(1)}`)
            .send({ name: 'Teste2' });

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.CREATED);
        expect(response.body.message).toEqual(
            RegionSuccessMessagesConstants.UPDATED
        );
        expect(response.body.response.name).toBe('Teste2');
    });

    it('Should delete a region and return correct status code', async () => {
        const response = await initServer
            .delete(`/api/regions/${Number(1)}`)
            .send({});

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response.body.message).toEqual(
            RegionSuccessMessagesConstants.DELETED
        );
    });

    it('Should return a list of regions and correct status code', async () => {
        const response = await initServer.get(`/api/regions/`).send({});

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response.body.message).toEqual(
            RegionSuccessMessagesConstants.FOUND_LIST
        );
    });

    it('Should return a list (of locations nearby a point) and correct status code', async () => {
        const response = await initServer
            .get(`/api/regions/coordinates/near`)
            .send(RegionMock.listNear);

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response.body.message).toEqual(
            RegionSuccessMessagesConstants.FOUND_LIST
        );
    });

    it('Should return a list (of a specific location from a point) and correct status code', async () => {
        const response = await initServer
            .get(`/api/regions/coordinates/point`)
            .send(RegionMock.listPoint);

        expect(response).toBeDefined();
        expect(response.status).toEqual(StatusCodes.OK);
        expect(response.body.message).toEqual(
            RegionSuccessMessagesConstants.FOUND_LIST
        );
    });
});
