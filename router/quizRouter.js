import express from "express";
import { addQuiz, getQuiz } from "../controller/quizController.js";

const router = express.Router();

router.route("/quiz/add").post(addQuiz);
router.route("/get-quiz").get(getQuiz);

export default router;
