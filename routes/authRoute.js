import express from "express";
import { insertNewUser } from "../controllers/authController.js";

const router = express.Router();

// Sign up route
router.post("/register", insertNewUser);

export default router;
