import { Request, Response } from "express";
import { DeleteStudentService } from "../../services/StudentServices/DeleteStudentService";

export class DeleteStudentController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeleteStudentService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.status(204).end();
  }
}
