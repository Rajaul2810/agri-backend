import express from "express";
import { createTraining, deleteTraining, getAllTrainings, getFeaturedTrainings, getSingleTraining, getTrainingBySearch, updateTraining } from "../controllers/tranningController.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyUser, createTraining);
router.put("/:id", verifyUser, updateTraining);
router.delete("/:id", verifyUser, deleteTraining);
router.get("/:id", getSingleTraining);
router.get("/", getAllTrainings);
router.get("/search", getTrainingBySearch);
router.get("/featured", getFeaturedTrainings);


export default router;