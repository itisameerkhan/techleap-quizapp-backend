import express from "express";
import { addQuiz, getAnswers, getCorrectAnswer, getQuestion, getQuiz } from "../controller/quizController.js";

const router = express.Router();
 
router.route("/quiz/add").post(addQuiz);
router.route("/get-quiz").get(getQuiz);
router.route("/quiz/:questionId").get(getQuestion);
router.route("/quiz/get/answer/:questionId").post(getAnswers);
router.route("/get-answer/:questionId").get(getCorrectAnswer)
 
export default router;
 