/* eslint-disable linebreak-style */

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name:'usuarios',
})
export class User {
  @PrimaryGeneratedColumn()
    id_usuario?: number;

  @Column()
    nome?: string;

  @Column()
    email?: string;

  @Column()
    senha?: string;  

  @Column()
    administrador?: boolean;  
}