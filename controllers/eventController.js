import Event from "../models/Event.js";


// create new event
export const createEvent = async (req, res) => {
    const newEvent = new Event(req.body);
   
    try {
        const savedEvent = await newEvent.save();
        res.status(200).json({ success: true, message: "Successfully created", data: savedEvent });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create. Try again" });
    }
}

// update event
export const updateEvent = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated", data: updatedEvent });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update. Try again" });
    }
}

// delete event
export const deleteEvent = async (req, res) => {
    const id = req.params.id;
    try {
        await Event.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete. Try again" });
    }
}

// get single event
export const getSingleEvent = async (req, res) => {
    const id = req.params.id;
    try {
        const event = await Event.findById(id);
        res.status(200).json({ success: true, message: "Successfully found", data: event });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get all events
export const getAllEvents = async (req, res) => {
    const page = parseInt(req.query.page);
    const category = req.query.category;
    const isActive = req.query.isActive;
    
    try {
        const events = await Event.find({
            ...(category && { category }),
            ...(isActive && { isActive })
        }).skip(page * 8).limit(8);
        
        res.status(200).json({ success: true, message: "Successfully found", data: events });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get event by search
export const getEventBySearch = async (req, res) => {
    const searchQuery = new RegExp(req.query.title, 'i');
    
    try {
        const events = await Event.find({ title: searchQuery });
        res.status(200).json({ success: true, message: "Successfully found", data: events });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get featured events
export const getFeaturedEvents = async (req, res) => {
    try {
        const events = await Event.find({ isFeatured: true });
        res.status(200).json({ success: true, message: "Successfully found", data: events });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get event count
export const getEventCount = async (req, res) => {
    try {
        const eventCount = await Event.estimatedDocumentCount();
        res.status(200).json({ success: true, data: eventCount });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch event count" });
    }
}
