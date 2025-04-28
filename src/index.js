import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/database.js";
import cors from "cors";
import userRoute from "../router/userRoute.js";
import cookieParser from "cookie-parser";
import quizRouter from "../router/quizRouter.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://anotherquizapp-lilac.vercel.app",
    credentials: true,
  })
);


connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("SERVER IS LISTENING TO PORT: ", process.env.PORT);
  });
});

app.use("/", userRoute);
app.use("/",quizRouter);

app.use((err, req, res, next) => {

  console.log(err);
  
  res.json({
    success: false,
    message: err.message || "something went wrong",
  });
});
