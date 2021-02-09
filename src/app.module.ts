import { Module } from '@nestjs/common';

import { ContactModule } from './contact/contact/contact.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'nestjs_dev',
    autoLoadEntities:true,
    synchronize: true,
  }),ContactModule],
  
})
export class AppModule {}
