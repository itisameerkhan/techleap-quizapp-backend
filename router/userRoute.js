import express from "express";
import { signUp, login, logout, authenticateUser, getUserInfo } from "../controller/userController.js";

const router = express.Router();

router.route("/user/new").post(signUp);
router.route("/user/login").post(login); 
router.route("/user/logout").get(logout);
router.route("/user/authenticate").get(authenticateUser);
router.route("/user/get/info").get(getUserInfo);

export default router;
 