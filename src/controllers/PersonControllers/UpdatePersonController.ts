import { Request, Response } from "express";
import { UpdatePersonService } from "../../services/PersonServices/UpdatePersonService";

export class UpdatePersonController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const obj = req.body;

    const service = new UpdatePersonService();

    const result = await service.execute(id, obj);

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.json(result);
  }
}
