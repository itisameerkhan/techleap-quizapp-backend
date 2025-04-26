import express from "express";
import { addQuiz, getAnswers, getCorrectAnswer, getLeaderboard, getQuestion, getQuiz, updateDashboard } from "../controller/quizController.js";
import { userAuth } from "../middlewares/auth.js";

const router = express.Router();
 
router.route("/quiz/add").post(addQuiz);
router.route("/get-quiz").get(getQuiz);
router.route("/quiz/:questionId").get(getQuestion);
router.route("/quiz/get/answer/:questionId").post(getAnswers);
router.route("/get-answer/:questionId").get(getCorrectAnswer);
router.route("/save-dashboard").post(updateDashboard);
router.route("/get-leaderboard").get(getLeaderboard);
 
export default router;
 