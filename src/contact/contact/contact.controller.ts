import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './contact.dto';
import { ContactEntity } from './contact.entity';

@Controller('contact')
export class ContactController {

    constructor(private readonly contactService: ContactService){}


    @Post()
    @UsePipes(new ValidationPipe())
    async createContact(@Body() contactDto: ContactDto): Promise<ContactEntity>{
      console.log('Request',contactDto);
      return this.contactService.saveContact(contactDto);
        }

        @Get()
    async getAllContactDetails():Promise<ContactEntity[]>{
          return this.contactService.findAll();
        }
}
