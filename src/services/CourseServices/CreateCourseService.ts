import { getCustomRepository } from "typeorm";
import { Course } from "../../entities/Course";
import { CourseRepository } from "../../repositories/CourseRepository";

export class CreateCourseService {
  async execute(obj: Course): Promise<Course | Error> {
    const repo = getCustomRepository(CourseRepository);

    try {
      return await repo.save(obj);
    } catch (error) {
      return new Error(error);
    }
  }
}
