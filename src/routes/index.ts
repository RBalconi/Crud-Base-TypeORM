import { Router } from "express";
import personRoutes from "./person.routes";

const routes = Router();

routes.use("/person", personRoutes);

export default routes;
