import express from "express";
import mongoose from "mongoose";
import { addQuiz } from "../controller/quizController.js";

const router = express.Router();

router.route("/quiz/add").post(addQuiz);
export default router;
