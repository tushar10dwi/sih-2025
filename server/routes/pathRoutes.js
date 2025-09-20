import {Router} from "express";
import { PrismaClient } from "../models/generated/prisma/client.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

const pathRouter = Router();

pathRouter.get("/careers", async (req, res) => {
  const { interest } = req.query;

  if (!interest) {
    return res.status(400).json({ error: "Interest is required" });
  }

  try {
    const careers = await prisma.career.findMany({
      where: {
        interestRequired: {
          some: {
            interest: {
              name: {
                equals: interest,
                mode: "insensitive" // case-insensitive search
              }
            }
          }
        }
      },
      include: {
        degreesRequired: { include: { degree: true } },
        interestRequired: { include: { interest: true } }
      }
    });

    res.json(careers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default pathRouter;