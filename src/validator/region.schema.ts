import * as Joi from 'joi';

export const CreateRegionSchema = Joi.object({
    regionId: Joi.number().required(),
    name: Joi.string().required(),
    userId: Joi.number().required(),
    coordinates: Joi.array()
        .items(Joi.array().items(Joi.number().required()).min(2).max(2))
        .min(4)
        .max(4)
        .required(),
}).required();

export const GetRegionSchema = Joi.object({
    id: Joi.number().required(),
}).required();

export const UpdateRegionSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
}).required();

export const DeleteRegionSchema = Joi.object({
    id: Joi.number().required(),
}).required();

export const ListNearRegionSchema = Joi.object({
    coordinates: Joi.array()
        .items(Joi.number().required())
        .max(2)
        .min(2)
        .required(),
});

export const ListPointRegionSchema = Joi.object({
    coordinates: Joi.array()
        .items(Joi.array().items(Joi.number().required()).min(2).max(2))
        .min(4)
        .max(4)
        .required(),
});

export const RegionSchema = {
    CREATE: CreateRegionSchema,
    GET: GetRegionSchema,
    UPDATE: UpdateRegionSchema,
    DELETE: DeleteRegionSchema,
    LIST_NEAR: ListNearRegionSchema,
    LIST_POINT: ListPointRegionSchema,
};
