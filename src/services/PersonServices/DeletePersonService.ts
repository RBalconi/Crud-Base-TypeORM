import { getCustomRepository } from "typeorm";
import { PersonRepository } from "../../repositories/PersonRepository";

export class DeletePersonService {
  async execute(id: string) {
    const repo = getCustomRepository(PersonRepository);

    if (!(await repo.findOne(id))) {
      return new Error("Person not found");
    }

    await repo.delete(id);
  }
}
