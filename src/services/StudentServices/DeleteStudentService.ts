import { getCustomRepository } from "typeorm";
import { StudentRepository } from "../../repositories/StudentRepository";

export class DeleteStudentService {
  async execute(id: string) {
    const repo = getCustomRepository(StudentRepository);

    if (!(await repo.findOne(id))) {
      return new Error("Student not found");
    }

    await repo.delete(id);
  }
}
