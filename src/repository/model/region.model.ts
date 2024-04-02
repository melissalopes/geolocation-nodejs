import * as mongoose from 'mongoose';
import {
    Prop,
    modelOptions,
    Ref,
    getModelForClass,
} from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { User } from './user.model';
import ObjectId = mongoose.Types.ObjectId;

class Base extends TimeStamps {
    @Prop({ required: true, default: () => new ObjectId().toString() })
    _id: string;
}

@modelOptions({ schemaOptions: { validateBeforeSave: false } })
export class Region extends Base {
    @Prop({ required: true })
    regionId!: number;

    @Prop({ required: true })
    name!: string;

    @Prop({ ref: () => User, required: true, type: () => String })
    user: Ref<User>;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    coordinates: Array<number>;
}

export const RegionModel = getModelForClass(Region);
