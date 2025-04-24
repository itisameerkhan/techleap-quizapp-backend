import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  quizType: {
    type: String,
    required: true,
  },
  content: [
    {
      question: {
        type: String,
        required: true,
      },
      option1: {
        type: String,
        required: true,
      },
      option2: {
        type: String,
        required: true,
      },
      option3: {
        type: String,
        required: true,
      },
      option4: {
        type: String,
        required: true,
      },
    },
  ],
});

export const Quiz = mongoose.model("Quiz", quizSchema);
