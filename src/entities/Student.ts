import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Course } from "./Course";
import { Person } from "./Person";

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @CreateDateColumn({ name: "created_at" })
  public createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt: Date;

  @OneToOne(() => Course, { eager: true, cascade: true })
  @JoinColumn({ name: "course_id" })
  public course: Course;

  @OneToOne(() => Person, { eager: true, cascade: true })
  @JoinColumn({ name: "person_id" })
  public person: Person;

  constructor() {}
}
