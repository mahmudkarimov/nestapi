import { Module } from '@nestjs/common';
import { DatasourcesController } from './datasources.controller';
import { DatasourcesService } from './datasources.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatasourceSchema } from './datasource.schema';

@Module({
    imports: [ MongooseModule.forFeature([{ name: 'Datasource', schema: DatasourceSchema }]),],
    controllers: [DatasourcesController],
    providers: [DatasourcesService],
})
export class DatasourcesModule { }
