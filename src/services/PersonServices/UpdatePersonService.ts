import { getCustomRepository } from "typeorm";
import { Person } from "../../entities/Person";
import { PersonRepository } from "../../repositories/PersonRepository";

export class UpdatePersonService {
  async execute(id: string, obj: Person): Promise<Person | Error> {
    const repo = getCustomRepository(PersonRepository);

    try {
      const person = await repo.findOne(id);
      if (!person) {
        return new Error("Person not found");
      }

      repo.merge(person, obj);

      return await repo.save(person);
    } catch (error) {
      return new Error(error);
    }
  }
}
