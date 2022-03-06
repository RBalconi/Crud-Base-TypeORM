import { getCustomRepository } from "typeorm";
import { Person } from "../../entities/Person";
import { PersonRepository } from "../../repositories/PersonRepository";

export class CreatePersonService {
  async execute(obj: Person): Promise<Person | Error> {
    const repo = getCustomRepository(PersonRepository);

    try {
      return await repo.save(obj);
    } catch (error) {
      return new Error(error);
    }
  }
}
