import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("persons")
export class Person {
  @PrimaryColumn()
  public id: string;

  @Column()
  public created_at: Date;

  @Column()
  public updated_at: Date;

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
