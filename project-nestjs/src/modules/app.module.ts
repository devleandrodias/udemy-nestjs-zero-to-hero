import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { TaskModule } from './tasks/tasks.module';
import { typeOrmConfig } from 'src/configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TaskModule, AuthModule]
})
export class AppModule {}
