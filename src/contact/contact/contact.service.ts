import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { ContactEntity } from './contact.entity';
import { ContactDto } from './contact.dto';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(ContactEntity)
        private usersRepository: Repository<ContactEntity>,
      ) {}
    
      async saveContact(contactDto:ContactDto):Promise<ContactEntity>{
       let contactEntity : ContactEntity  = new ContactEntity();
       contactEntity.fName= contactDto.fName;
       contactEntity.lName=contactDto.lName;
       contactEntity.email= contactDto.email;
       contactEntity.city=contactDto.city;
       contactEntity.country=contactDto.country
       contactEntity.dob=contactDto.dob
       contactEntity.visaType=contactDto.visaType;
       contactEntity.eligible=contactDto.eligible;
    return await this.usersRepository.save(contactEntity);
      }
     
    
      async findAll(): Promise<ContactEntity[]> {
        return this.usersRepository.find();
      }
    
      findOne(id: string): Promise<ContactEntity> {
        return this.usersRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }

}
