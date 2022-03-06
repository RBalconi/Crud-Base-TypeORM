import { Request, Response } from "express";
import { CreateStudentService } from "../../services/StudentServices/CreateStudentService";

export class CreateStudentController {
  async handle(req: Request, res: Response) {
    const obj = req.body;

    const service = new CreateStudentService();

    const result = await service.execute(obj);

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.json(result);
  }
}
