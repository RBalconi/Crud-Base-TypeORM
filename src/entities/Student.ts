import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Course } from "./Course";
import { Person } from "./Person";

@Entity("students")
export class Student {
  @PrimaryColumn()
  public id: string;

  @CreateDateColumn({ name: "created_at" })
  public created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public updated_at: Date;

  @OneToOne(() => Course)
  @JoinColumn({ name: "course_id" })
  public course: Course;

  @OneToOne(() => Person)
  @JoinColumn({ name: "person_id" })
  public person: Person;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
