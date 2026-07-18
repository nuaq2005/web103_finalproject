import { Router } from "express";
import {
  getAllActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activitiesController.js";

const router = Router();

router.get("/", getAllActivities);
router.get("/:id", getActivityById);
router.post("/", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);

export default router;
