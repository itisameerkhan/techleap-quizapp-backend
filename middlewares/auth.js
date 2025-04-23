import { User } from "../models/userModel.js";
import jwt from jsonwebtoken;

export const userAuth = async(req, res, next) => {
    try {
        const cookie = req.cookie;
        const { token } = cookie;

        if(!token) {
            res.status(401).json({
                success: false,
                message:"Token not found"
            });
        }

        const decodedObj = jwt.verify(token, process.env.JWT_SECRET);
        const {_id} = decodedObj;

        const user = await User.findById(_id);

        if(!user) {
            res.status(401).json({
                success: false,
                message: "user not found",
            });
        }

        req.user = user;
        next();
    } catch(e) {
        next(e);
    }
}