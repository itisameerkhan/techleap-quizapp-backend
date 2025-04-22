import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/database.js";
import cors from "cors";
import userRoute from "../router/userRoute.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("SERVER IS LISTENING TO PORT: ", process.env.PORT);
  });
});

app.use("/", userRoute);

app.use((err, req, res, next) => {
  res.json({
    success: false,
    message: err || "something went wrong",
  });
});
