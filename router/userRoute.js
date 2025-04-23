import express from "express";
import { signUp, login, logout } from "../controller/userController.js";

const router = express.Router();

router.route("/user/new").post(signUp);
router.route("/user/login").post(login);
router.route("/user/logout").get(logout);

export default router;
