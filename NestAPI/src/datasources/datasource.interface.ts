import * as mongoose from 'mongoose'

export interface Datasource extends mongoose.Document {
    id?: string;
    name: string;
    connection: String;
    version: Number
}


 