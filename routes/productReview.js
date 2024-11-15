import express from "express";
import { createProductReview, getSingleProductReview, getAllProductReviews, updateProductReview, deleteProductReview } from "../controllers/productReviewController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:productId", verifyUser, createProductReview);
router.get("/:id", getSingleProductReview);
router.get("/:productId", getAllProductReviews);
router.put("/:id", verifyUser, updateProductReview);
router.delete("/:id/:productId", verifyUser, deleteProductReview);

export default router;  