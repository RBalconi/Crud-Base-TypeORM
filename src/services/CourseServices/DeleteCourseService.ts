import { getRepository } from "typeorm";
import { Course } from "../../entities/Course";

export class DeleteCourseService {
  async execute(id: string) {
    const repo = getRepository(Course);

    if (!(await repo.findOne(id))) {
      return new Error("Course not found");
    }

    await repo.delete(id);
  }
}
