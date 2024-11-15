import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    gallery: {
        type: [String],
    },
    farmName: {
        type: String,
    },
    farmLocation: {
        type: String,
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "ProductReview",
    },
    
}, { timestamps: true });

export default mongoose.model("Product", productSchema);