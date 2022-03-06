import { Router } from "express";
import { CreatePersonController } from "../controllers/PersonControllers/CreatePersonController";
import { DeletePersonController } from "../controllers/PersonControllers/DeletePersonController";
import { GetAllPersonController } from "../controllers/PersonControllers/GetAllPersonController";
import { UpdatePersonController } from "../controllers/PersonControllers/UpdatePersonController";

const personRoutes = Router();

personRoutes.post("/create", new CreatePersonController().handle);
personRoutes.get("/getAll", new GetAllPersonController().handle);
personRoutes.delete("/delete/:id", new DeletePersonController().handle);
personRoutes.put("/update/:id", new UpdatePersonController().handle);

export default personRoutes;
