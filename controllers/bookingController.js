import Booking from "../models/Booking.js"

// create booking
export const createBooking = async (req, res) => {

    const newBooking = new Booking(req.body);
    console.log(newBooking)
    
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({ success: true, message: "Booking successfull", data: savedBooking });
    } catch (err) {
        res.status(500).json({ success: false, message: "Faild to booking. Try again" });
    }
}


//get user booking
export const getUserBooking = async (req, res) => {
    const userId = req.params.userId;
    try {
        const books = await Booking.find({userId});
        res.status(200).json({ success: true, message: "Successfull", data: books });
    } catch (error) {
        res.status(404).json({ success: false, message: "Not found" });
    }   
}


// get single booking
export const getBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Booking.findById(id);
        res.status(200).json({ success: true, message: "Successfull", data: book });
    } catch (error) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}


// get all booking
export const getAllBooking = async (req, res) => {
    //const id = req.params.id;
    try {
        const books = await Booking.find({});
        res.status(200).json({ success: true, message: "Successfull", data: books });
    } catch (error) {
        res.status(500).json({ success: false, message: "Not found" });
    }
}

// delete booking
export const deleteBooking = async (req, res) => {
    const id = req.params.id;
    try {
        await Booking.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (error) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}



