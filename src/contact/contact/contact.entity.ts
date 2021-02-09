import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class ContactEntity {
    @PrimaryGeneratedColumn()
     id: number;
     @Column()
    fName:string;
    @Column()
    lName:string;
    @Column()
    email:string;
    @Column()
    dob:Date;
    @Column()
    city:string;
    @Column()
    country:string;
    @Column()
    eligible:string;
    @Column()
    visaType:string;
}