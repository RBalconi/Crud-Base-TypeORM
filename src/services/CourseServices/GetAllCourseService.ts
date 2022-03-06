import { getRepository } from "typeorm";
import { Course } from "../../entities/Course";

export class GetAllCourseService {
  async execute() {
    const repo = getRepository(Course);

    return await repo.find();
  }
}
