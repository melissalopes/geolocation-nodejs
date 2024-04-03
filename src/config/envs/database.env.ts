export class DatabaseEnvs {
    static readonly URI = process.env.MONGO_URI;

    static readonly DATABASE = process.env.MONGO_DATABASE;
}
