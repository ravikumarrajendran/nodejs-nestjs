import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactRepository } from './contact.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ContactRepository])],
  controllers: [ContactController],
  providers: [ContactService]
})
export class ContactModule {}
