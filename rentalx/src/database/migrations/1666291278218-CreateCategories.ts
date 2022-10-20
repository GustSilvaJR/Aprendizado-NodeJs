/* eslint-disable linebreak-style */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategories1666291278218 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns:[
          {
            name: 'id',
            type: 'uuid',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
