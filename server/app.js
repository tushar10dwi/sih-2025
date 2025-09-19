// src/app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRouter.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import verifyToken from "./middlewares/authMiddleware.js";
import quizRoutes from "./routes/quizRoutes.js";
// import progressRoutes from "./routes/progress.js";
verifyToken

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", verifyToken, userRoutes);
app.use("/api/quiz", verifyToken, quizRoutes);
// app.use("/api/progress", progressRoutes);

// Error handler
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ message: "Internal server error" });
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

export default app;
