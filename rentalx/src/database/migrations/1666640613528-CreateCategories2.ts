/* eslint-disable linebreak-style */
/* eslint-disable import/named */

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategories1666378625898 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns:[
          {
            name: '_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: '_name',
            type: 'varchar',
          },
          {
            name: '_description',
            type: 'varchar',
          },
          {
            name:'_created-at',
            type:'timestamp',
            default:'now() ',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }

}
