import { Quiz } from "../models/quizModel.js";
import { Answers } from "../models/answerModel.js";

export const addQuiz = async (req, res) => {
  try {
    const correctAnswers = req.body.content.map((data) => data.correctAnswer);
    const quizType = req.body.quizType;
    const content = req.body.content.map((data) => {
      return {
        question: data.question,
        option1: data.option1,
        option2: data.option2,
        option3: data.option3,
        option4: data.option4,
      };
    });

    const quiz = new Quiz({
      quizType: quizType,
      content: content,
    });

    await quiz.save();

    const answers = new Answers({
      questionId: quiz._id,
      answers: correctAnswers,
    });

    await answers.save();

    res.json({
      success: true,
      message: "quiz added successfully",
    });
  } catch (e) {
    throw new Error("something went wrong");
  }
};
