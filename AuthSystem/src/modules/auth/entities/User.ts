import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'adm_usuarios',
})
export class User {
  @PrimaryGeneratedColumn()
    HANDLE?: number;

  @Column()
    DAT_INCLUIDO?: Date;

  @Column()
    NOM_USUARIO?: string;

  @Column()
    NOM_SENHA?: string;

  @Column()
    NOM_EMAIL?: string;

  @Column()
    FLG_STATUS?: string;

  @Column()
    HAN_EMPRESA?: number;

  @Column()
    FLG_TIPO_USUARIO?: string;
}