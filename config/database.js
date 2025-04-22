import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection successful");
  } catch (e) {
    console.log("Error from database connection");
    console.log(e);
  }
};

export default connectDB;