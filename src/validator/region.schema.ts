import * as Joi from 'joi';

export const CreateRegionSchema = Joi.object({
    regionId: Joi.number().required(),
    name: Joi.string().required(),
    userId: Joi.number().required(),
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

export const RegionSchema = {
    CREATE: CreateRegionSchema,
    GET: GetRegionSchema,
    UPDATE: UpdateRegionSchema,
    DELETE: DeleteRegionSchema,
};
