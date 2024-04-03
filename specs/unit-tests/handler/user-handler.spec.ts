import { StatusCodes } from 'http-status-codes';
import { UserHandler } from '../../../src/handler';
import { UserMock } from '../../mocks';
import {
    UserErrorMessagesConstants,
    UserSuccessMessagesConstants,
} from '../../../src/constant';

jest.mock('../../../src/logic');
jest.mock('../../../src/service');
jest.mock('../../../src/repository');

// ! Example of unit tests with Jest
describe('User Handler', () => {
    let mockResponse;
    let mockRequest;
    let handler;

    beforeEach(async () => {
        mockRequest = (body: any, params: any) => {
            return {
                body,
                params,
            };
        };

        mockResponse = () => {
            const res = { statusCode: 0, status: null, json: null };
            res.status = jest.fn().mockImplementationOnce((status: number) => {
                res.statusCode = status;
                return res;
            });
            res.json = jest.fn().mockImplementationOnce((response) => {
                res.json = response;
                return res;
            });
            return res;
        };

        handler = new UserHandler();
    });

    it('Should call createHandle correctly and return the correct response', async () => {
        const req = mockRequest(UserMock.createWithAddress);
        const res = mockResponse();

        await handler.createHandle(req, res);

        expect(res.json['message']).toEqual(
            UserSuccessMessagesConstants.CREATED
        );
        expect(res.statusCode).toEqual(StatusCodes.CREATED);
    });

    it('Should call getHandle correctly and return the correct response', async () => {
        const req = mockRequest({}, { id: 1 });
        const res = mockResponse();

        await handler.getHandle(req, res);

        expect(res.json['message']).toEqual(UserSuccessMessagesConstants.FOUND);
        expect(res.statusCode).toEqual(StatusCodes.OK);
    });

    it('Should call updateHandle correctly and return the correct response', async () => {
        const req = mockRequest({ name: 'Fulano' }, { id: 1 });
        const res = mockResponse();

        await handler.updateHandle(req, res);

        expect(res.json['message']).toEqual(
            UserSuccessMessagesConstants.UPDATED
        );
        expect(res.statusCode).toEqual(StatusCodes.CREATED);
    });

    it('Should call deleteHandle correctly and return the correct response', async () => {
        const req = mockRequest({}, { id: 1 });
        const res = mockResponse();

        await handler.deleteHandle(req, res);

        expect(res.json['message']).toEqual(
            UserSuccessMessagesConstants.DELETED
        );
        expect(res.statusCode).toEqual(StatusCodes.OK);
    });

    it('Should call getAllHandle correctly and return the correct response', async () => {
        const req = mockRequest();
        const res = mockResponse();

        await handler.getAllHandle(req, res);

        expect(res.json['message']).toEqual(
            UserSuccessMessagesConstants.FOUND_LIST
        );
        expect(res.statusCode).toEqual(StatusCodes.OK);
    });
});
