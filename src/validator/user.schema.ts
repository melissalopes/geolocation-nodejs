import * as Joi from 'joi';

export const CreateUserSchema = Joi.object({
    userId: Joi.number().required(),
    name: Joi.string().required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
        .required(),
    address: Joi.when('coordinates', {
        is: Joi.exist(),
        then: Joi.forbidden(),
        otherwise: Joi.string().required(),
    }),
    coordinates: Joi.object({
        lat: Joi.number(),
        lng: Joi.number(),
    }),
}).required();

export const GetUserSchema = Joi.object({
    id: Joi.number().required(),
}).required();

export const UpdateUserSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
}).required();

export const DeleteUserSchema = Joi.object({
    id: Joi.number().required(),
}).required();

export const UserSchema = {
    CREATE: CreateUserSchema,
    GET: GetUserSchema,
    UPDATE: UpdateUserSchema,
    DELETE: DeleteUserSchema,
};
