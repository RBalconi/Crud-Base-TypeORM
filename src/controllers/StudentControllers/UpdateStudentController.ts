import { Request, Response } from "express";
import { UpdateStudentService } from "../../services/StudentServices/UpdateStudentService";

export class UpdateStudentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const obj = req.body;

    const service = new UpdateStudentService();

    const result = await service.execute(id, obj);

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.json(result);
  }
}
