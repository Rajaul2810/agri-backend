import Review from "../models/Review.js";
import Tour from "../models/Tour.js";

export const createReview = async (req, res)=>{

    const tourId = req.params.tourId;
    const newReview = new Review({...req.body});


  try {
    const savedReview = await newReview.save();

    // update tour review array
    await Tour.findByIdAndUpdate(tourId,{
        $push:{reviews:savedReview._id}
    })

    res.status(200).json({ success: true, message: "Review submitted", data: savedReview });
    
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to submitted. Try again"});
  }
}

// get all reviews for a tour
export const getAllReviews = async (req, res) => {
    const tourId = req.params.tourId;
    try {
        const reviews = await Review.find({ tour: tourId });
        res.status(200).json({ success: true, message: "Successfully found", data: reviews });
    } catch (err) {
        res.status(404).json({ success: false, message: "Reviews not found" });
    }
}

// update review
export const updateReview = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedReview = await Review.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated", data: updatedReview });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update review. Try again" });
    }
}

// delete review
export const deleteReview = async (req, res) => {
    const id = req.params.id;
    try {
        await Review.findByIdAndDelete(id);
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete review. Try again" });
    }
}



