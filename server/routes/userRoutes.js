import {Router} from "express";
import { PrismaClient } from "../models/generated/prisma/client.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

const userRouter = Router();

/**
 * CREATE profile
 */
userRouter.post("/", async (req, res) => {
  try {
    const { age, sex, location, classLevel, category } = req.body;

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

/**
 * READ all profiles
 */
// userRouter.get("/", async (req, res) => {
//   try {
//     const profiles = await prisma.profile.findMany();
//     res.json(profiles);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

/**
 * READ profile by ID
 */
userRouter.get("/dashboard", async (req, res) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: { userId: req.user.id },
    });
    res.json(profile);
  } catch (err) {
    res.status(404).json({ error: "Profile not found" });
  }
});

/**
 * UPDATE profile
 */
userRouter.put("/", async (req, res) => {
  try {
    const { age, sex, location, classLevel, category } = req.body;

    const profile = await prisma.profile.update({
      where: { userId: req.user.id },
      data: { age, sex, location, classLevel, category },
    });

    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * DELETE profile
 */
userRouter.delete("/", async (req, res) => {
  try {
    await prisma.profile.delete({
      where: { userId: req.user.id },
    });
    res.json({ message: "Profile deleted" });
  } catch (err) {
    res.status(404).json({ error: "Profile not found" });
  }
});

export default userRouter;