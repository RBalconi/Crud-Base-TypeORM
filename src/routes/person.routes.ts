import { Router } from "express";
import { DeletePersonController } from "../controllers/PersonControllers/DeletePersonController";
import { GetAllPersonController } from "../controllers/PersonControllers/GetAllPersonController";
import { UpdatePersonController } from "../controllers/PersonControllers/UpdatePersonController";

const personRoutes = Router();

personRoutes.post("/person/create", (req, res) => {});
personRoutes.get("/person/getAll", new GetAllPersonController().handle);
personRoutes.delete("/person/delete/:id", new DeletePersonController().handle);
personRoutes.put("/person/update/:id", new UpdatePersonController().handle);

export default personRoutes;
