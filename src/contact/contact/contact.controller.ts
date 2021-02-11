import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './contact.dto';
import { SearchDto } from './search.dto';
import { ContactEntity } from './contact.entity';
import { Logger } from '@nestjs/common';
@Controller('contact')
export class ContactController {
    private logger = new Logger('ContactController');
    constructor(private readonly contactService: ContactService){}

    @Get()
    // http://localhost:3000/contact?fName=darsha&visaType=L1
        searchByQuery(@Query(ValidationPipe) searchDto:SearchDto){
          this.logger.verbose('enter into searchByQuery');
          return this.contactService.findContactByquery(searchDto);
        }
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
