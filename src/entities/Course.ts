import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("courses")
export class Course {
  @PrimaryColumn()
  public id: string;

  @Column()
  public created_at: Date;

  @Column()
  public updated_at: Date;

  @Column()
  public name: string;

  @Column()
  public situation: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
