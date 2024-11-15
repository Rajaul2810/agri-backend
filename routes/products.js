import express from "express";
import { createProduct, updateProduct, deleteProduct, getSingleProduct, getAllProducts, getProductBySearch, getFeaturedProducts, getProductCount } from "../controllers/productController.js";

const router = express.Router();

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getSingleProduct);
router.get("/", getAllProducts);
router.get("/search", getProductBySearch);
router.get("/featured", getFeaturedProducts);
router.get("/count", getProductCount);

export default router;