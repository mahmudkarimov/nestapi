import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DatasourceDTO } from './datasource.dto';
import { Datasource } from './datasource.interface';


@Injectable()
export class DatasourcesService {
    constructor(
        @InjectModel('Datasource') private readonly datasourceModel: Model<Datasource>,
    ) { }

    async findAll(): Promise<Datasource[]> {
        return this.datasourceModel.find({})
    }

    async find(id: string): Promise<Datasource> {
        return this.datasourceModel.findOne({ _id: id })
    }

    async create(datasource: DatasourceDTO): Promise<Datasource> {
        return new this.datasourceModel(datasource).save()
    }

    async update(id: string, datasource: Datasource): Promise<Datasource> {
        return this.datasourceModel.findByIdAndUpdate(id, datasource)
    }

    async delete(id: string): Promise<Datasource> {
        return this.datasourceModel.findByIdAndRemove(id)
    }

}
