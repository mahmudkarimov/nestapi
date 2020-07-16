import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { DatasourcesModule } from './datasources/datasources.module';

@Module({
  imports: [DatasourcesModule,
    MongooseModule.forRoot('mongodb://localhost/nest',{ useNewUrlParser: true,useUnifiedTopology: true  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
