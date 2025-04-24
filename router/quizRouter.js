import express from "express";
import { addQuiz, getQuestion, getQuiz } from "../controller/quizController.js";

const router = express.Router();
 
router.route("/quiz/add").post(addQuiz);
router.route("/get-quiz").get(getQuiz);
router.route("/quiz/:questionId").get(getQuestion);
 
export default router;
 