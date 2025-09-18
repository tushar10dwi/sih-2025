import {Router} from "express";
import { PrismaClient } from "../models/generated/prisma/client.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

async function signup(req, res) {
  const { firstName, lastName, email, password } = req.body;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(400).json({ message: "User already exists" });

  if(!(firstName && lastName && email && password))
  {
    res.status(403).json({message: "All feilds are mandatory."});
  }

  const hashed = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: { firstName, lastName, email, password: hashed },
  });

  res.json({ message: "User registered", userId: newUser.id });

};

async function login(req, res) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(user);

  user.token = token;
  user.password = undefined;

  //Cookies Section
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }
  res.status(200).cookie("token", token, options).json({
    success: true,
    token,
    user
  })

//   res.json({ token });
}

async function logout(req, res) {
  res.clearCookie("accessToken", { httpOnly: true, sameSite: "strict" }).json({ message: "Logged out Successfully"});
}

async function resetPassword(req, res) {
  const { email, newPassword } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(400).json({ message: "User not found" });

  const hashed = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { email },
    data: { password: hashed },
  });

  res.json({ message: "Password reset successful" });
}

async function me(req, res) {
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({ id: user.id, email: user.email, createdAt: user.createdAt });
}

const authController = {signup,login,logout,resetPassword,me}
export default authController;