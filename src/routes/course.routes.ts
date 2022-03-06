import { Router } from "express";
import { CreateCourseController } from "../controllers/CourseControllers/CreateCourseController";
import { DeleteCourseController } from "../controllers/CourseControllers/DeleteCourseController";
import { GetAllCourseController } from "../controllers/CourseControllers/GetAllCourseController";
import { UpdateCourseController } from "../controllers/CourseControllers/UpdateCourseController";

const routes = Router();

routes.post("/course/create", new CreateCourseController().handle);
routes.get("/course/getAll", new GetAllCourseController().handle);
routes.delete("/course/delete/:id", new DeleteCourseController().handle);
routes.put("/course/update/:id", new UpdateCourseController().handle);

export { routes };
