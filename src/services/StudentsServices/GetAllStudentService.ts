import { getRepository } from "typeorm";
import { Person } from "../../entities/Person";

export class GetAllPersonService {
  async execute() {
    const repo = getRepository(Person);

    return await repo.find();
  }
}
