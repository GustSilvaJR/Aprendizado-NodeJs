import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'adm_sistemas',
})

export class System {
  @PrimaryGeneratedColumn()
    HANDLE?:number;

  @Column()
    DAT_INCLUIDO?:Date;

  @Column()
    NOM_SISTEMA?:string;
  
  @Column()
    FLG_STATUS?:string;
    
}

