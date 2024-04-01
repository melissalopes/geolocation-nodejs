/* eslint-disable max-classes-per-file */
import { StatusCodes } from 'http-status-codes';

export interface HttpResponseDTO {
    statusCode: number;
    body?: string;
}

export class Ok extends Error {
    status: number;

    message: string;

    constructor(message: string) {
        super();
        this.status = StatusCodes.OK;
        this.message = message;
    }
}

export class Created extends Error {
    status: number;

    message: string;

    constructor(message: string) {
        super();
        this.status = StatusCodes.CREATED;
        this.message = message;
    }
}

export class Updated extends Error {
    status: number;

    message: string;

    constructor(message: string) {
        super();
        this.status = StatusCodes.CREATED;
        this.message = message;
    }
}

export class BadRequest extends Error {
    status: number;

    message: string;

    constructor(message: string) {
        super();
        this.status = StatusCodes.BAD_REQUEST;
        this.message = message;
    }
}

export class PreConditionFailed extends Error {
    status: number;

    message: string;

    constructor(message: string) {
        super();
        this.status = StatusCodes.PRECONDITION_FAILED;
        this.message = message;
    }
}

export class NotFound extends Error {
    status: number;

    message: string;

    constructor(message: string) {
        super();
        this.status = StatusCodes.NOT_FOUND;
        this.message = message;
    }
}

export class InternalServerError extends Error {
    status: number;

    message: string;

    constructor(message: string) {
        super();
        this.status = StatusCodes.INTERNAL_SERVER_ERROR;
        this.message = message;
    }
}
