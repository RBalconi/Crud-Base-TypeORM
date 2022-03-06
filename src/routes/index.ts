import { Router } from "express";
import coursesRoutes from "./course.routes";
import personRoutes from "./person.routes";
import studentsRoutes from "./students.routes";

const routes = Router();

routes.use("/person", personRoutes);
routes.use("/course", coursesRoutes);
routes.use("/student", studentsRoutes);

export default routes;
