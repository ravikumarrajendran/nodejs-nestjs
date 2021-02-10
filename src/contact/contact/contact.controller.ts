import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './contact.dto';
import { ContactEntity } from './contact.entity';
import { Logger } from '@nestjs/common';
@Controller('contact')
export class ContactController {
    private logger = new Logger('ContactController');
    constructor(private readonly contactService: ContactService){}

    
    @Post()
    @UsePipes(new ValidationPipe())
    async createContact(@Body() contactDto: ContactDto): Promise<ContactEntity>{
      this.logger.verbose('enter into create contact');
      console.log('Request',contactDto);
      return this.contactService.saveContact(contactDto);
        }

        @Get()
    async getAllContactDetails():Promise<ContactEntity[]>{
    this.logger.verbose('enter into getAllContactDetails');

          return this.contactService.findAll();
        }

        @Get('/:id')
    async getById(@Param('id') id:string):Promise<ContactEntity>{
      this.logger.verbose('enter into getById');
          return this.contactService.findById(id);
        }
}
