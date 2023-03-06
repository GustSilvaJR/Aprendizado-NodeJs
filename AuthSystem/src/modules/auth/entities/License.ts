import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';



@Entity({
  name: 'adm_licencas',
})

export class License {
  @PrimaryGeneratedColumn()
    HANDLE?: number;    
  
  @Column()
    DAT_INCLUIDO?: Date;

  @Column()
    QTD_LICENCAS?: number;

  @Column()
    HAN_EMPRESA?: number;

  @Column()
    HAN_SISTEMA?: number;

}