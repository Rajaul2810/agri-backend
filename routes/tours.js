import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, updateTour } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

 const router = express.Router();

 // create new tour router
 router.post("/", verifyAdmin, createTour);

 // update tour router
 router.put("/:id", verifyAdmin, updateTour);

 // delete tour router
 router.delete("/:id", verifyAdmin, deleteTour);

 // get single tour
 router.get("/:id", getSingleTour);

 // get all tour 
 router.get("/", getAllTour);

 // get search tour 
 router.get("/search/getTourBySearch", getTourBySearch);

 // get Featured tour 
 router.get("/search/getFeaturedTour", getFeaturedTour);

 export default router;