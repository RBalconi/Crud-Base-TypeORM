import { Request, Response } from "express";
import { GetAllCourseService } from "../../services/CourseServices/GetAllCourseService";

export class GetAllCourseController {
  async handle(req: Request, res: Response) {
    const service = new GetAllCourseService();

    const result = await service.execute();

    return res.json(result);
  }
}
