import { Router } from "express";
import { CreateStudentController } from "../controllers/StudentControllers/CreateStudentController";
import { DeleteStudentController } from "../controllers/StudentControllers/DeleteStudentController";
import { GetAllStudentController } from "../controllers/StudentControllers/GetAllStudentController";
import { UpdateStudentController } from "../controllers/StudentControllers/UpdateStudentController";

const studentsRoutes = Router();

studentsRoutes.post("/create", new CreateStudentController().handle);
studentsRoutes.get("/getAll", new GetAllStudentController().handle);
studentsRoutes.delete("/delete/:id", new DeleteStudentController().handle);
studentsRoutes.put("/update/:id", new UpdateStudentController().handle);

export default studentsRoutes;
