import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    mongoose.set("debug", true); // enable debug before connect

    await mongoose.connect("mongodb://127.0.0.1:27017/Test-Rest");

    console.log("✅ Connected to MongoDB successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

export { connectDB };
