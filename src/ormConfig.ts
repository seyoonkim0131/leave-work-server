import {ConnectionOptions} from "typeorm"

const connectionOptions : ConnectionOptions = {
    type: "postgres",
    database: "de48qfdmn5saie",
    synchronize: true,
    logging: true,
    entities: [ "entities/**/*.*" ],
    host: process.env.DB_ENDPOINT,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: true
}

export default connectionOptions;