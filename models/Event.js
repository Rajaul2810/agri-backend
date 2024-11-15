import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function() {
            return this.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        }
    },
    eventStartDate: {
        type: String,
        required: true,
    },
    eventEndDate: {
        type: String,
        required: true,
    },
    eventTime: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    locationUrl: {
        type: String,
    },
    capacity: {
        type: Number,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    isFree: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    tags: {
        type: [String]
    },
    registrationDeadline: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    facilities: {
        type: [String]
    }
}, 
{ timestamps: true }
);

export default mongoose.model("Event", eventSchema);
