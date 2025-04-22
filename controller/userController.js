import { User } from "../models/userModel.js";

export const newUserFunction = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = User({
        name, email, password
    });

    await user.save();

    res.json({
        success: true,
        message:"user created successfully"
    });

  } catch (e) {
    next(e);
  }
};
