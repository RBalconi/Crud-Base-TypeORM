import { EntityRepository, Repository } from "typeorm";
import { Person } from "../entities/Person";

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {
  public async findByName(name: string): Promise<Array<Person>> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
