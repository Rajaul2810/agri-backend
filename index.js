import express  from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'
import trainingRoute from './routes/traning.js'
import eventRoute from './routes/events.js'
import productRoute from './routes/products.js'
import productReviewRoute from './routes/productReview.js'


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin:true,
    credential:true,
}

// database connection 

mongoose.set("strictQuery",false);
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,
            { 
                
            // useNewUrlParser: true, useUnifiedTopology: true 
        })
        console.log("database connected");
        
    } catch (err) {
        console.log("database connection failed",err);
    }
}



// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/training', trainingRoute);
app.use('/api/v1/events', eventRoute);
app.use('/api/v1/products', productRoute);
app.use('/api/v1/productReview', productReviewRoute);



app.listen(port,()=>{
    connect()
    console.log("server listening on port",port);
})