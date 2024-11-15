import Product from "../models/Product.js";

// create new product
export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json({ success: true, message: "Successfully created", data: savedProduct });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create. Try again" });
    }
}

// update product
export const updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({ success: true, message: "Successfully updated", data: updatedProduct });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update. Try again" });
    }
}

// delete product 
export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete. Try again" });
    }
}

// get single product
export const getSingleProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id).populate("reviews");
        res.status(200).json({ success: true, message: "Successfully found", data: product });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get all products
export const getAllProducts = async (req, res) => {
    const page = parseInt(req.query.page);
    const category = req.query.category;
    const isAvailable = req.query.isAvailable;
    
    try {
        const products = await Product.find({
            ...(category && { category }),
            ...(isAvailable && { isAvailable })
        }).populate("reviews").skip(page * 8).limit(8);
        
        res.status(200).json({ success: true, message: "Successfully found", data: products });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get product by search
export const getProductBySearch = async (req, res) => {
    const searchQuery = new RegExp(req.query.name, 'i');
    
    try {
        const products = await Product.find({ name: searchQuery }).populate("reviews");
        res.status(200).json({ success: true, message: "Successfully found", data: products });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get featured products
export const getFeaturedProducts = async (req, res) => {
    try {
        const products = await Product.find({ isFeatured: true }).populate("reviews");
        res.status(200).json({ success: true, message: "Successfully found", data: products });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
}

// get product count
export const getProductCount = async (req, res) => {
    try {
        const productCount = await Product.estimatedDocumentCount();
        res.status(200).json({ success: true, data: productCount });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch product count" });
    }
}
