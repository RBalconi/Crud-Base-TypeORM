import { Request, Response } from "express";
import { CreateCourseService } from "../../services/CourseServices/CreateCourseService";

export class CreateCourseController {
  async handle(req: Request, res: Response) {
    const { name, situation } = req.body;

    const service = new CreateCourseService();

    const result = await service.execute({
      name,
      situation,
    });

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.json(result);
  }
}
