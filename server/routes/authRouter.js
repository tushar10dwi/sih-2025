import {Router} from "express";
import { PrismaClient } from "../models/generated/prisma/client.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import verifyToken from "../middlewares/authMiddleware.js";
import authController from "../controllers/authController.js";

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

// Utility: generate JWT
// function generateToken(user) {
//   return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });
// }

const authRouter = Router();

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);
authRouter.post("/reset-password", authController.resetPassword);
authRouter.get("/me", verifyToken, authController.me);

export default authRouter;
