import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function() {
            return this.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        }
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    bannerImg: {
        type: String,
        required: true,
    },
    galleryImages: [
        {
            type: String,
        },
    ],
    isActive: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    price: {
        type: Number,
        required: true,
    },
    desc:{
        type:String,
        required:true,
    },
    reviews: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Review",
        },
    ],
    discount: {
        type: Number,
        default: 0,
    },
    offDays: {
        type: [String],
        default: [],
    },
    season: {
        type: String,
        default: "All",
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    facilities: {
        type: [String],
        default: [],
    },
},
    {
        timestamps: true,
    }
);

export default mongoose.model("Tour",tourSchema);