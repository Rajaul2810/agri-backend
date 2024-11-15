import mongoose from "mongoose";

const trainingSchema = new mongoose.Schema({
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
    trainingStartDate: {
        type: String,
        required: true,
    },
    trainingEndDate: {
        type: String,
        required: true,
    },
    trainingTime: {
        type: String,
        required: true,
    },
    whatWillYouLearn: {
        type: [String],
        required: true,
    },
    whyYouShouldAttend: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    joinLink: {
        type: String,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    facilities: {
        type: [String],
        required: true,
    },
    guests:[
        {
            name: {
                type: String,
            },
            email: {
                type: String,
            },
            occupation: {
                type: String,
            },
            description: {
                type: String,
            },
            trainingGuestImage: {
                type: String,
            },
        }
        
    ],
    locationUrl: {
        type: String,
    },
    address: {
        type: String,
    },
    tags: {
        type: [String],
    },
},
{timestamps: true}
)

export default mongoose.model("Training", trainingSchema);