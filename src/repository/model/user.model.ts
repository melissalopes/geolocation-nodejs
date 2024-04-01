import * as mongoose from 'mongoose';
import { Prop, Ref, getModelForClass, pre } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import ObjectId = mongoose.Types.ObjectId;

class Base extends TimeStamps {
    @Prop({ required: true, default: () => new ObjectId().toString() })
    _id: string;
}

export class User extends Base {
    @Prop({ required: true })
    userId!: number;

    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    email!: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    coordinates: { lat: number; lng: number };
}

export const UserModel = getModelForClass(User);
