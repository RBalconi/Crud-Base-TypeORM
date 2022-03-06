import { EntityRepository, Repository } from "typeorm";
import { Course } from "../entities/Course";

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {
  public async findByName(name: string): Promise<Array<Course>> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
