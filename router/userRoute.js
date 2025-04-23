import express from "express";
import { signUp, login, logout, authenticateUser } from "../controller/userController.js";

const router = express.Router();

router.route("/user/new").post(signUp);
router.route("/user/login").post(login); 
router.route("/user/logout").get(logout);
router.route("/user/authenticate").get(authenticateUser);

export default router;
 