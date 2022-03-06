import { Request, Response } from "express";
import { UpdateCourseService } from "../../services/CourseServices/UpdateCourseService";

export class UpdateCourseController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, situation } = req.body;

    const service = new UpdateCourseService();

    const result = await service.execute({
      id,
      name,
      situation,
    });

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.json(result);
  }
}
