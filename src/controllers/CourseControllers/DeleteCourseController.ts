import { Request, Response } from "express";
import { DeleteCourseService } from "../../services/CourseServices/DeleteCourseService";

export class DeleteCourseController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeleteCourseService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.status(204).end();
  }
}
