import { Schema } from 'joi';
import { BadRequest, HttpResponseDTO } from './response.util';

export class ValidationUtils {
    public static validate(
        schema: Schema,
        object: unknown
    ): HttpResponseDTO | void {
        const validate = schema.validate(object, { allowUnknown: true });
        if (validate.error) {
            throw new BadRequest(validate.error.message);
        }
    }
}
