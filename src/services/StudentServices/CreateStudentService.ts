import { getCustomRepository } from "typeorm";
import { Student } from "../../entities/Student";
import { StudentRepository } from "../../repositories/StudentRepository";

export class CreateStudentService {
  async execute(obj: Student): Promise<Student | Error> {
    const repo = getCustomRepository(StudentRepository);

    try {
      return await repo.save(obj);
    } catch (error) {
      return new Error(error);
    }
  }
}
