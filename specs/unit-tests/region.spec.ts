import 'reflect-metadata';

import * as mongoose from 'mongoose';
import * as supertest from 'supertest';
import * as sinon from 'sinon';
import { faker } from '@faker-js/faker';
import { expect, assert } from 'chai';
import { Region, RegionModel } from '../../src/repository/model/models';
import GeoLib from '../../src/service/geo.service';
import server from '../../server';

describe('Region Model', () => {
    let session;
    let geoLibStub: Partial<typeof GeoLib> = {};

    before(async () => {
        geoLibStub.getAddressFromCoordinates = sinon
            .stub(GeoLib, 'getAddressFromCoordinates')
            .resolves(faker.location.streetAddress({ useFullAddress: true }));

        geoLibStub.getCoordinatesFromAddress = sinon
            .stub(GeoLib, 'getCoordinatesFromAddress')
            .resolves({
                lat: faker.location.latitude(),
                lng: faker.location.longitude(),
            });

        session = await mongoose.startSession();
    });

    after(() => {
        sinon.restore();
        session.endSession();
    });

    beforeEach(() => {
        session.startTransaction();
    });

    afterEach(() => {
        session.commitTransaction();
    });

    it('should create a region', async () => {
        const regionData: Omit<Region, '_id'> = {
            user: user._id,
            name: faker.person.fullName(),
        };

        const [region] = await RegionModel.create([regionData]);

        expect(region).to.deep.include(regionData);
    });
});
