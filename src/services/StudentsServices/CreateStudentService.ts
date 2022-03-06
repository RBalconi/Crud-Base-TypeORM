import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

type StudentRequest = {
  course: string;
  person: string;
};

export class CreateStudentService {
  async execute({ course, person }: StudentRequest): Promise<Student | Error> {
    const repo = getRepository(Student);

    try {
      const student = repo.create({
        // course: course,
        // person
      });
      return await repo.save(student);
    } catch (error) {
      return new Error(error);
    }
  }
}
