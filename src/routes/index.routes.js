import { Router } from "express";

import {
  renderIndex,
  addTask,
  renderEditTask,
  updateEditTask,
  deleteTask,
  toogleTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderIndex);

router.post("/task/add", addTask);

router.get("/task/edit/:id", renderEditTask);

router.post("/task/edit/:id", updateEditTask);

router.get("/task/delete/:id", deleteTask);

router.get("/task/toggle/:id", toogleTask);

export default router;
