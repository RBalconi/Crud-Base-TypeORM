import { Request, Response } from "express";
import { GetAllStudentService } from "../../services/StudentServices/GetAllStudentService";

export class GetAllStudentController {
  async handle(req: Request, res: Response) {
    const service = new GetAllStudentService();

    const result = await service.execute();

    return res.json(result);
  }
}
