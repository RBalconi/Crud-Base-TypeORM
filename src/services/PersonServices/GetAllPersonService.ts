import { getCustomRepository } from "typeorm";
import { PersonRepository } from "../../repositories/PersonRepository";

export class GetAllPersonService {
  async execute() {
    const repo = getCustomRepository(PersonRepository);

    return await repo.find();
  }
}
