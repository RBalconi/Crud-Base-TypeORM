import { Request, Response } from "express";
import { UpdatePersonService } from "../../services/PersonServices/UpdatePersonService";

export class UpdatePersonController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, cellphone, phone, address, email } = req.body;

    const service = new UpdatePersonService();

    const result = await service.execute({
      id,
      name,
      cellphone,
      phone,
      address,
      email,
    });

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }

    return res.json(result);
  }
}
