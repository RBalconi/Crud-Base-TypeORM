import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Students1646577418747 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "students",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "course_id",
            type: "uuid",
          },
          {
            name: "person_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "fk_students_course",
            columnNames: ["course_id"],
            referencedTableName: "courses",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_students_person",
            columnNames: ["person_id"],
            referencedTableName: "persons",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("students");
  }
}
