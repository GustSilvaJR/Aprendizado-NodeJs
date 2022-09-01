import { v4 as uuid } from 'uuid';

export class Category {

  private _id?: string;

  private _name: string;

  private _description: string;

  private _created_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }


  //SETTERS 
  set id(id:string) {
    this._id = id;
  }

  set name(name:string) {
    this._name = name;
  }

  set description(description:string) {
    this._description = description;
  }

  set created_at(created_at:Date) {
    this._created_at = created_at;
  }

}