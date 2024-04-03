import * as mongoose from 'mongoose';
import {
    Prop,
    modelOptions,
    Ref,
    getModelForClass,
    index,
} from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { User } from './user.model';
import ObjectId = mongoose.Types.ObjectId;

class Base extends TimeStamps {
    @Prop({ required: true, default: () => new ObjectId().toString() })
    _id: string;
}

@index({ location: '2dsphere' })
@modelOptions({ schemaOptions: { validateBeforeSave: false } })
export class Region extends Base {
    @Prop({ required: true })
    regionId!: number;

    @Prop({ required: true })
    name!: string;

    @Prop({ ref: () => User, required: true, type: () => String })
    user: Ref<User>;

    @Prop({ required: true, type: () => Object })
    location: {
        type: string;
        coordinates: [[[number, number]]];
    };
}

export const RegionModel = getModelForClass(Region);
