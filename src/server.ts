import express from "express";
import "reflect-metadata";
import "./database";
import { routes } from "./routes/course.routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
