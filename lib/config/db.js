import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://kitindi:kitindi@cluster0.xlv1a.mongodb.net/techblog");
  console.log("DB connection established");
};
