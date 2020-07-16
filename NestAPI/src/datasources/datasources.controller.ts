import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { DatasourceDTO } from './datasource.dto';
import { Datasource } from './datasource.interface';
import { DatasourcesService } from './datasources.service';

@Controller('datasources')
export class DatasourcesController {

    constructor(private readonly datasourcesService: DatasourcesService) {
    }

    @Get()
    findAll(): Promise<Datasource[]> {
        return this.datasourcesService.findAll()
    }

    @Get(':id')
    find(@Param('id') id: string): Promise<Datasource> {
        return this.datasourcesService.find(id)
    }

    @Post()
    create(@Body() datasource: DatasourceDTO): Promise<Datasource> {
        return this.datasourcesService.create(datasource)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() datasource: DatasourceDTO): Promise<Datasource> {
        return this.datasourcesService.update(id, datasource as Datasource)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Datasource> {
        return this.datasourcesService.delete(id)
    }
}
