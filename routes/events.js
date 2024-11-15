import express from "express";
import { createEvent, deleteEvent, getAllEvents, getEventBySearch, getFeaturedEvents, getSingleEvent, updateEvent } from "../controllers/eventController.js";

const router = express.Router();

router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.get("/:id", getSingleEvent);
router.get("/", getAllEvents);
router.get("/search", getEventBySearch);
router.get("/featured", getFeaturedEvents);

export default router;
    