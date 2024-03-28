import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';


const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

// update user router
router.put("/:id", verifyUser, updateUser);

// delete user router
router.delete("/:id", verifyUser, deleteUser);

// get single user
router.get("/:id", verifyUser, getSingleUser);

// get all user 
router.get("/", verifyAdmin, getAllUser);

export default router;
