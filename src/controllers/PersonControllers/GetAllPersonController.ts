import { Request, Response } from "express";
import { GetAllPersonService } from "../../services/PersonServices/GetAllPersonService";

export class GetAllPersonController {
  async handle(req: Request, res: Response) {
    const service = new GetAllPersonService();

    const result = await service.execute();

    return res.json(result);
  }
}
