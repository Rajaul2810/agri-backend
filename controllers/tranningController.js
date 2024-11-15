import Training from "../models/Tranning.js";

// create new training
export const createTraining = async (req, res) => {
    const newTraining = new Training(req.body);
   
    try {
        const saveTraining = await newTraining.save();
        res.status(200).json({ success: true, message: "Successfully created", data: saveTraining });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create. Try again" });
    }
}

// update training
export const updateTraining = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTraining = await Training.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated", data: updatedTraining });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update. Try again" });
    }
}

// delete training 
export const deleteTraining = async (req, res) => {
    const id = req.params.id;
    try {
        await Training.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete. Try again" });
    }
}

// get single training
export const getSingleTraining = async (req, res) => {
    const id = req.params.id;
    try {
        const training = await Training.findById(id);
        res.status(200).json({ success: true, message: "Successfully found", data: training });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get all trainings
export const getAllTrainings = async (req, res) => {
    const page = parseInt(req.query.page);
    const category = req.query.category;
    const isOnline = req.query.isOnline;
    const isActive = req.query.isActive;
    
    try {
        const trainings = await Training.find({
            ...(category && { category }),
            ...(isOnline && { isOnline }),
            ...(isActive && { isActive })
        }).skip(page * 8).limit(8);
        
        res.status(200).json({ success: true, message: "Successfully found", data: trainings });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get training by search
export const getTrainingBySearch = async (req, res) => {
    const searchQuery = new RegExp(req.query.title, 'i');
    
    try {
        const trainings = await Training.find({ title: searchQuery });
        res.status(200).json({ success: true, message: "Successfully found", data: trainings });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get featured trainings
export const getFeaturedTrainings = async (req, res) => {
    try {
        const trainings = await Training.find({ isFeatured: true });
        res.status(200).json({ success: true, message: "Successfully found", data: trainings });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get training count
export const getTrainingCount = async (req, res) => {
    try {
        const trainingCount = await Training.estimatedDocumentCount();
        res.status(200).json({ success: true, data: trainingCount });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch training count" });
    }
}
