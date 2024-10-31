import mongoose from "mongoose";

const mongoUri = "mongodb://localhost:27017/innorik-ssr"; // Replace with your MongoDB URI

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
