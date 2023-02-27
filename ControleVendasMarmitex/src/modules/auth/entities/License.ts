import { Entity, PrimaryGeneratedColumn } from 'typeorm';



@Entity({
  name: 'adm_licencas',
})

export class License {
  @PrimaryGeneratedColumn()
    HANDLE?: number;    
}