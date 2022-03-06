import { getCustomRepository } from "typeorm";
import { Student } from "../../entities/Student";
import { StudentRepository } from "../../repositories/StudentRepository";

export class UpdateStudentService {
  async execute(id: string, obj: Student): Promise<Student | Error> {
    const repo = getCustomRepository(StudentRepository);

    try {
      const Student = await repo.findOne(id);
      if (!Student) {
        return new Error("Student not found");
      }

      repo.merge(Student, obj);

      return await repo.save(Student);
    } catch (error) {
      return new Error(error);
    }
  }
}
