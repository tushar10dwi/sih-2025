import {Router} from "express";
import { PrismaClient } from "../models/generated/prisma/client.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

const quizRouter = Router();

quizRouter.post("/career", async (req,res) => {
    try {
    const { interest,career,degree } = req.body;

    const profile = await prisma.profile.create({
      data: {
        userId: req.user.id,
        age,
        sex,
        location,
        classLevel,
        category,
      },
      include: { user:true }
    });

    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default quizRouter;