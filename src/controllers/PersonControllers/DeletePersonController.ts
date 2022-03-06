import { Request, Response } from "express";
import { DeletePersonService } from "../../services/PersonServices/DeletePersonService";

export class DeletePersonController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeletePersonService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.status(204).end();
  }
}
