import express from 'express';
import { createReview, getAllReviews, getSingleReview, updateReview, deleteReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();


router.post("/:tourId", verifyUser, createReview);
router.get("/:tourId", getAllReviews);
router.get("/:id", getSingleReview);
router.put("/:id", verifyUser, updateReview);
router.delete("/:id/:tourId", verifyUser, deleteReview);

export default router;