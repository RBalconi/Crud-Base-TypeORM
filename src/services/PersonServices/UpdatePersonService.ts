import { getCustomRepository } from "typeorm";
import { Person } from "../../entities/Person";
import { PersonRepository } from "../../repositories/PersonRepository";

type PersonRequest = {
  id: string;
  name: string;
  cellphone: string;
  phone: string;
  address: string;
  email: string;
};

export class UpdatePersonService {
  async execute({
    id,
    name,
    cellphone,
    phone,
    address,
    email,
  }: PersonRequest): Promise<Person | Error> {
    const repo = getCustomRepository(PersonRepository);

    try {
      const person = await repo.findOne(id);
      if (!person) {
        return new Error("Person not found");
      }

      person.name = name ? name : person.name;
      person.cellphone = cellphone ? cellphone : person.cellphone;
      person.phone = phone ? phone : person.phone;
      person.address = address ? address : person.address;
      person.email = email ? email : person.email;

      return await repo.save(person);
    } catch (error) {
      return new Error(error);
    }
  }
}
