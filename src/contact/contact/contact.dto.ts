
import {IsEmail,IsDateString,IsNotEmpty,
  } from 'class-validator';

export class ContactDto {
    @IsNotEmpty()
    fName:string;
    @IsNotEmpty()
    lName:string;
    @IsEmail()
    email:string;
    @IsDateString()
    dob:Date;
    @IsNotEmpty()
    city:string;
    @IsNotEmpty()
    country:string;
    @IsNotEmpty()
    eligible:string;
    @IsNotEmpty()
    visaType:string;

}