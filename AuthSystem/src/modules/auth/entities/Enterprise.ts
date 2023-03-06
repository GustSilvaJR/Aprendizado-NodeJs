/* eslint-disable linebreak-style */

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'adm_empresas',
})
export class Enterprise {
  @PrimaryGeneratedColumn()
    HANDLE?: number;

  @Column()
    DAT_INCLUIDO?: Date;

  @Column()
    NOM_EMPRESA?: string;

  @Column()
    NOM_ENDERECO_API?: string;

  @Column()
    FLG_STATUS?: string;
}