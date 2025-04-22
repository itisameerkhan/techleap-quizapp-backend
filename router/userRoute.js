import express from "express";
import { newUserFunction } from "../controller/userController.js";

const router = express.Router();

router.route("/user/new").post(newUserFunction);
 
export default router;