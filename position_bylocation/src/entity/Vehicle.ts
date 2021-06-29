import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp} from "typeorm";


@Entity("Vehicle")
export class Vehicle extends BaseEntity {

    @PrimaryGeneratedColumn()
    idVehicle: number;

    @Column()
    registrationNumber:String;

    @Column()
    chassisNumber:String;

    @Column()
    vehiclebrand:String;

    @Column()
    vehiclemodel:String;

    @Column()
    vehicleColor:String;

    @Column()
    idBorne:number;

    @Column()
    longitude:number;

    @Column()
    latitude:number;
}