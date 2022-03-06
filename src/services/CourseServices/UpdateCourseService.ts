import { getRepository } from "typeorm";
import { Course } from "../../entities/Course";

type CourseRequest = {
  id: string;
  name: string;
  situation: string;
};

export class UpdateCourseService {
  async execute({
    id,
    name,
    situation,
  }: CourseRequest): Promise<Course | Error> {
    const repo = getRepository(Course);

    try {
      const course = await repo.findOne(id);
      if (!course) {
        return new Error("course not found");
      }

      course.name = name ? name : course.name;
      course.situation = situation ? situation : course.situation;

      return await repo.save(course);
    } catch (error) {
      return new Error(error);
    }
  }
}
