import mongoose from "mongoose";

const DashboardSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  questionId: {
    type: String, 
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const Dashboard = mongoose.model("Dashboard", DashboardSchema);
