import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "../app";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || "";
let isConnected = false;

export default async function handler(req: any, res: any) {
  try {
    if (!isConnected) {
      if (!MONGODB_URI) {
        res.status(500).json({
          message: "MONGODB_URI is not set in environment variables.",
        });
        return;
      }
      await mongoose.connect(MONGODB_URI);
      isConnected = true;
    }
    return app(req, res);
  } catch (error) {
    const err = error as Error;
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message || error });
  }
}
