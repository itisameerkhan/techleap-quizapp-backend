import { User } from "../models/userModel.js";
import validator from "validator";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const newUserFunction = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!validator.isEmail(email)) {
      throw new Error("Invalid Email");
    }
    if (!validator.isStrongPassword(password)) {
      throw new Error("Invalid Password");
    }

    const validUser = await User.findOne({ email: email });

    console.log("valid user", validUser);

    if (validUser) {
      throw new Error("user already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const user = User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

    console.log(token);

    res.cookie("token", token);

    res.json({
      success: true,
      message: "user created successfully",
    });
  } catch (e) {
    next(e);
  }
};
