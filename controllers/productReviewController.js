import ProductReview from "../models/ProductReview.js";
import Product from "../models/product.js";


// create new product review
export const createProductReview = async (req, res) => {
    const productId = req.params.productId;
    const newReview = new ProductReview({...req.body});

    try {
        const savedReview = await newReview.save();

        // update product review array
        await Product.findByIdAndUpdate(productId, {
            $push: {reviews: savedReview._id}
        });

        res.status(200).json({ success: true, message: "Review submitted", data: savedReview });
        
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to submit review. Try again" });
    }
}

// get single product review
export const getSingleProductReview = async (req, res) => {
    const id = req.params.id;
    try {
        const review = await ProductReview.findById(id);
        res.status(200).json({ success: true, message: "Successfully found", data: review });
    } catch (err) {
        res.status(404).json({ success: false, message: "Review not found" });
    }
}

// get all reviews for a product
export const getAllProductReviews = async (req, res) => {
    const productId = req.params.productId;
    try {
        const reviews = await ProductReview.find({ product: productId });
        res.status(200).json({ success: true, message: "Successfully found", data: reviews });
    } catch (err) {
        res.status(404).json({ success: false, message: "Reviews not found" });
    }
}

// update product review
export const updateProductReview = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedReview = await ProductReview.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated", data: updatedReview });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update review. Try again" });
    }
}

// delete product review
export const deleteProductReview = async (req, res) => {
    const id = req.params.id;
    const productId = req.params.productId;
    try {
        await ProductReview.findByIdAndDelete(id);
        
        // remove review from product reviews array
        await Product.findByIdAndUpdate(productId, {
            $pull: {reviews: id}
        });

        res.status(200).json({ success: true, message: "Successfully deleted review" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete review. Try again" });
    }
}
