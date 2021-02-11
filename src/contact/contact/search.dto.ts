import {IsOptional,IsNotEmpty} from 'class-validator';
export class SearchDto{
    @IsOptional()
    @IsNotEmpty()
    fName:string;
    @IsOptional()
    @IsNotEmpty()
    visaType:string;
}