import { getCustomRepository } from "typeorm";
import { Course } from "../../entities/Course";
import { CourseRepository } from "../../repositories/CourseRepository";

export class UpdateCourseService {
  async execute(id: string, obj: Course): Promise<Course | Error> {
    const repo = getCustomRepository(CourseRepository);

    try {
      const Course = await repo.findOne(id);
      if (!Course) {
        return new Error("Course not found");
      }

      repo.merge(Course, obj);

      return await repo.save(Course);
    } catch (error) {
      return new Error(error);
    }
  }
}
