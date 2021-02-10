import { ContactEntity } from './contact.entity';
import { EntityRepository ,Repository } from 'typeorm';
import { ContactDto } from './contact.dto';
import { Logger } from '@nestjs/common';
@EntityRepository(ContactEntity)
export class ContactRepository extends Repository<ContactEntity>{
    private logger = new Logger('ContactRepository');
    async createContact(contactDto:ContactDto):Promise<ContactEntity>{
        this.logger.verbose('enter into createContact');
        let contactEntity : ContactEntity  = new ContactEntity();
        contactEntity.fName= contactDto.fName;
        contactEntity.lName=contactDto.lName;
        contactEntity.email= contactDto.email;
        contactEntity.city=contactDto.city;
        contactEntity.country=contactDto.country
        contactEntity.dob=contactDto.dob
        contactEntity.visaType=contactDto.visaType;
        contactEntity.eligible=contactDto.eligible;
      return this.save(contactEntity);
    }
}