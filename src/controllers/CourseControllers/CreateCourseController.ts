import { Request, Response } from "express";
import { CreateCourseService } from "../../services/CourseServices/CreateCourseService";

export class CreateCourseController {
  async handle(req: Request, res: Response) {
    const obj = req.body;

    const service = new CreateCourseService();

    const result = await service.execute(obj);

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.json(result);
  }
}
