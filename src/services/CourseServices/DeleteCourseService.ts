import { getCustomRepository } from "typeorm";
import { CourseRepository } from "../../repositories/CourseRepository";

export class DeleteCourseService {
  async execute(id: string) {
    const repo = getCustomRepository(CourseRepository);

    if (!(await repo.findOne(id))) {
      return new Error("Course not found");
    }

    await repo.delete(id);
  }
}
