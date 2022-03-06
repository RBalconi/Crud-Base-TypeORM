import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("persons")
export class Person {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @CreateDateColumn({ name: "created_at" })
  public createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt: Date;

  @Column()
  public name: string;

  @Column()
  public cellphone: string;

  @Column()
  public phone: string;

  @Column()
  public address: string;

  @Column()
  public email: string;

  constructor() {}
}
