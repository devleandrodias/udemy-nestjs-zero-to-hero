import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskModule } from './tasks/tasks.module';
import { typeOrmConfig } from 'src/configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TaskModule]
})
export class AppModule {}
