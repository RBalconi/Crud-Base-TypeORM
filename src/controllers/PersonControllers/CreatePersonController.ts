import { Request, Response } from "express";
import { CreatePersonService } from "../../services/PersonServices/CreatePersonService";

export class CreatePersonController {
  async handle(req: Request, res: Response) {
    const obj = req.body;

    const service = new CreatePersonService();

    const result = await service.execute(obj);

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.json(result);
  }
}
