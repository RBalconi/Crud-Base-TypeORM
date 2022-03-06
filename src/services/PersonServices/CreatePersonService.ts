import { getCustomRepository } from "typeorm";
import { Person } from "../../entities/Person";
import { PersonRepository } from "../../repositories/PersonRepository";

type PersonRequest = {
  // updated_at: Date;
  name: string;
  cellphone: string;
  phone: string;
  address: string;
  email: string;
};

export class CreatePersonService {
  async execute({
    // updated_at,
    name,
    cellphone,
    phone,
    address,
    email,
  }: PersonRequest): Promise<Person | Error> {
    const repo = getCustomRepository(PersonRepository);

    try {
      const person = repo.create({
        // updated_at,
        name,
        cellphone,
        phone,
        address,
        email,
      });
      return await repo.save(person);
    } catch (error) {
      return new Error(error);
    }
  }
}
