import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
  questionId: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
});

export const Answers = mongoose.model("Answers", answerSchema);
