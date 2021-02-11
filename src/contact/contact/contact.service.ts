import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@nestjs/common';
import { ContactEntity } from './contact.entity';
import { ContactDto } from './contact.dto';
import { ContactRepository } from './contact.repository';
import { SearchDto } from './search.dto';

@Injectable()
export class ContactService {
  private logger = new Logger('ContactService');
    constructor(
        @InjectRepository(ContactRepository)
        private contactRepository: ContactRepository,
      ) {}
    
      async saveContact(contactDto:ContactDto):Promise<ContactEntity>{
        this.logger.verbose('enter into saveContact');
    return await this.contactRepository.createContact(contactDto);
      }
     
    
      async findAll(): Promise<ContactEntity[]> {
        this.logger.verbose('enter into findAll');
        return this.contactRepository.find();
      }
    
      findById(id: string): Promise<ContactEntity> {
        this.logger.verbose('enter into findById');
        return this.contactRepository.findOne(id);
      }

      findContactByquery(searchDto:SearchDto):Promise<ContactEntity[]>{

        return this.contactRepository.getContactByQuery(searchDto);

      }
    /*
      async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }
*/
}
