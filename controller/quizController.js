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

export const getQuiz = async (req, res, next) => {
  try {
    const response = await Quiz.find({});

    res.json({
      success: true,
      message: "data fetched successfully",
      data: response,
    });
  } catch (e) {
    next(e);
  }
};

export const getQuestion = async (req, res, next) => {
  try {
    const questionId = req.params.questionId;
    const question = await Quiz.findById(questionId);
    res.json({
      success: true,
      message: "question fetched successfully",
      data: question,
    });
  } catch (e) {
    next(e);
  }
};

export const getAnswers = async (req, res, next) => {
  try {
    const { questionId } = req.params;

    const response = await Answers.findOne({ questionId: questionId });

    const correctAnswers = response.answers;

    let numberOfCorrect = 0;

    for (let i = 0; i < 10; i++) {
      if (correctAnswers[i] === req.body[i.toString()]) {
        numberOfCorrect++;
      }
    }

    res.json({
      success: true,
      message: "answer fetched successfull",
      data: response.answers,
      numberOfCorrect: numberOfCorrect,
    });
  } catch (e) {
    next(e);
  }
};

export const getCorrectAnswer = async (req, res, next) => {
  try {
    const { questionId } = req.params;
    const response = await Answers.findOne({ questionId: questionId });
    res.json({
      success: true,
      message: "Answer fetched successfully",
      data: response,
    });
  } catch (e) {
    next(e);
  }
};
