import { getRepository } from "typeorm";
import { Course } from "../../entities/Course";

type CourseRequest = {
  name: string;
  situation: string;
};

export class CreateCourseService {
  async execute({ name, situation }: CourseRequest): Promise<Course | Error> {
    const repo = getRepository(Course);

    try {
      const Course = repo.create({
        name,
        situation,
      });
      return await repo.save(Course);
    } catch (error) {
      return new Error(error);
    }
  }
}
