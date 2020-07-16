import * as mongoose from 'mongoose'

export const DatasourceSchema = new mongoose.Schema({
    name: String,
    connection: String,
    version: Number
})