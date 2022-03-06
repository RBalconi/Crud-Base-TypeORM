import { getCustomRepository } from "typeorm";
import { StudentRepository } from "../../repositories/StudentRepository";

export class GetAllStudentService {
  async execute() {
    const repo = getCustomRepository(StudentRepository);

    return await repo.find();
  }
}
