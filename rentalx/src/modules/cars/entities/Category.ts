import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('categories')
export class Category {

  @PrimaryColumn()
  private _id?: string;

  @Column()
  private _name: string;

  @Column()
  private _description: string;

  @CreateDateColumn()
  private _created_at: Date;


  constructor() {
    if (!this._id) {
      this._id = uuid();
    }
  }

  set id(id:string) {
    this._id = id;
  }

  set name(name:string) {
    this._name = name;
  }

  get name():string {
    return this._name;
  }

  set description(description:string) {
    this._description = description;
  }

  get description() {
    return this._description;
  }

  set created_at(created_at:Date) {
    this._created_at = created_at;
  }

  get created_at() {
    return this._created_at;
  }

}