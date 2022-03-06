import { getRepository } from "typeorm";
import { Person } from "../../entities/Person";

export class DeletePersonService {
  async execute(id: string) {
    const repo = getRepository(Person);

    if (!(await repo.findOne(id))) {
      return new Error("Person not found");
    }

    await repo.delete(id);
  }
}
