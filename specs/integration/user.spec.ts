import { StatusCodes } from 'http-status-codes';
import * as supertest from 'supertest';
import server from '../../server';
import { UserIntegrationTestMock } from '../mocks';
import { UserSuccessMessagesConstants } from '../../src/constant';

// ! Implementing tests with Jest
describe('User integration tests', () => {
    let initServer;

    beforeEach(async () => {
        initServer = supertest(server);
    });

    it('Should create an user w/ address and return correct status code', async () => {
        const response = await initServer
            .post(`/api/users`)
            .send(UserIntegrationTestMock.createWithAddress);

        expect(response.statusCode).toEqual(StatusCodes.CREATED);
        expect(response._body.message).toEqual(
            UserSuccessMessagesConstants.CREATED
        );
        expect(response._body.response.address).toBeDefined();
        expect(response._body.response.coordinates).toBeDefined();
    });

    it('Should create an user w/ coordinates and return correct status code', async () => {
        const response = await initServer
            .post(`/api/users`)
            .send(UserIntegrationTestMock.createWithCoordinates);

        expect(response.statusCode).toEqual(StatusCodes.CREATED);
        expect(response._body.message).toEqual(
            UserSuccessMessagesConstants.CREATED
        );
        expect(response._body.response.address).toBeDefined();
        expect(response._body.response.coordinates).toBeDefined();
    });

    it('Should get an user and return correct status code', async () => {
        const response = await initServer.get(`/api/users/${Number(1)}`).send({
            body: {},
            params: { id: 1 },
        });

        expect(response.statusCode).toEqual(StatusCodes.OK);
        expect(response._body.message).toEqual(
            UserSuccessMessagesConstants.FOUND
        );
    });

    it('Should update an user and return correct status code', async () => {
        const response = await initServer
            .patch(`/api/users/${Number(1)}`)
            .send({ name: 'Julia' }, { id: 1 });

        expect(response.statusCode).toEqual(StatusCodes.CREATED);
        expect(response._body.message).toEqual(
            UserSuccessMessagesConstants.UPDATED
        );
        expect(response._body.response.name).toBe('Julia');
    });

    it('Should return a list of users and correct status code', async () => {
        const response = await initServer.get(`/api/users/`).send();

        console.log('ABACAXI', response);

        expect(response.statusCode).toEqual(StatusCodes.OK);
        expect(response._body.message).toEqual(
            UserSuccessMessagesConstants.FOUND_LIST
        );
        expect(response._body.response).toBeDefined();
    });

    it('Should delete an user and return correct status code', async () => {
        const response = await initServer
            .delete(`/api/users/${Number(1)}`)
            .send({}, { id: 1 });

        expect(response.statusCode).toEqual(StatusCodes.OK);
        expect(response._body.message).toEqual(
            UserSuccessMessagesConstants.DELETED
        );
        expect(response._body.response).toBeDefined();
    });
});
