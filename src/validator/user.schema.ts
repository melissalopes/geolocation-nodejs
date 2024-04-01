import * as Joi from 'joi';

export const CreateUserSchema = Joi.object({
    userId: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
        .required(),
    address: Joi.string(),
    coordinates: {
        lat: Joi.number(),
        lng: Joi.number(),
    },
}).required();

export const UserSchema = {
    CREATE: CreateUserSchema,
};

// ! fazer regra de negocio do Endereço ou Coordenadas
