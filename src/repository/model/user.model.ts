import * as mongoose from 'mongoose';
import { Prop, Ref, getModelForClass, pre } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import ObjectId = mongoose.Types.ObjectId;
import { Region } from './region.model';
import { GeocodeService } from './../../service';
import { object } from 'joi';

const lib = new GeocodeService();

class Base extends TimeStamps {
    @Prop({ required: true, default: () => new ObjectId().toString() })
    _id: string;
}

/* @pre<User>('save', async function (next) {
    const region = this as Omit<any, keyof User> & User;

    if (region.isModified('coordinates')) {
        region.address = await lib.getAddressFromCoordinates(
            region.coordinates
        );
    } else if (region.isModified('address')) {
        const { lat, lng } = await lib.getCoordinatesFromAddress(
            region.address
        );

        region.coordinates = [lng, lat];
    }

    next();
}) */

export class User extends Base {
    @Prop({ required: true })
    userId!: string;

    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    email!: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    coordinates: { lat: number; lng: number };

    /* @Prop({
        required: true,
        default: [],
        ref: () => Region,
        type: () => String,
    })
    regions: Ref<Region>[]; */
}

export const UserModel = getModelForClass(User);
