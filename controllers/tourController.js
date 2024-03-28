import Tour from "../models/Tour.js";


// create new tour 

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
   
    try {
        const saveTour = await newTour.save();
        res.status(200).json({ success: true, message: "Successfully created", data: saveTour });
    } catch (err) {
        res.status(500).json({ success: false, message: "Faild to create. Try agian" });
    }
}

// update tour
export const updateTour = async (req, res) => {

    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated", data: updatedTour });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update. Try again" });

    }
}
// delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully deleted"});
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete. Try again" });

    }
}
// getSingle tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate("reviews");
        res.status(200).json({ success: true, message: "Successfully found", data: tour });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });

    }
}

// getAll tour
export const getAllTour = async (req, res) => {
    const page = parseInt(req.query.page);
    //console.log(page);
    try {
        const tours = await Tour.find({}).populate("reviews").skip(page*8).limit(8);
        res.status(200).json({ success: true, message: "Successfully found", data: tours });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });

    }
}
// get tour by  search
export const getTourBySearch = async (req, res) => {
     const city = new RegExp(req.query.city,'i');

    try {
        const tours = await Tour.find({city});
        res.status(200).json({ success: true, message: "Successfully found", data: tours });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });

    }
}
// get Featured tour
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({featured:true}).populate("reviews");
        res.status(200).json({ success: true, message: "Successfully found", data: tours });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });

    }
}