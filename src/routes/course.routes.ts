import { Router } from "express";
import { CreateCourseController } from "../controllers/CourseControllers/CreateCourseController";
import { DeleteCourseController } from "../controllers/CourseControllers/DeleteCourseController";
import { GetAllCourseController } from "../controllers/CourseControllers/GetAllCourseController";
import { UpdateCourseController } from "../controllers/CourseControllers/UpdateCourseController";

const coursesRoutes = Router();

coursesRoutes.post("/create", new CreateCourseController().handle);
coursesRoutes.get("/getAll", new GetAllCourseController().handle);
coursesRoutes.delete("/delete/:id", new DeleteCourseController().handle);
coursesRoutes.put("/update/:id", new UpdateCourseController().handle);

export default coursesRoutes;
