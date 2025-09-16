// src/app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import authRouter from "./routes/authRouter.js";
import cookieParser from "cookie-parser";
// import userRoutes from "./routes/user.js";
// import careerRoutes from "./routes/career.js";
// import progressRoutes from "./routes/progress.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRouter);
// app.use("/api/user", userRoutes);
// app.use("/api/career", careerRoutes);
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
