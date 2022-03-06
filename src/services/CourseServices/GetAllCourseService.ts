import { getCustomRepository } from "typeorm";
import { CourseRepository } from "../../repositories/CourseRepository";

export class GetAllCourseService {
  async execute() {
    const repo = getCustomRepository(CourseRepository);

    return await repo.find();
  }
}
