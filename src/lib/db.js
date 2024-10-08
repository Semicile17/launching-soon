import mongoose from "mongoose";

export const dbConnect = () => {
  if (mongoose.connection.readyState === 1) {
    console.log("DB connection is already established");
    return;
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE URI is not defined");
  }

  const connectionString = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE_PASSWORD);

  mongoose
    .connect(connectionString)
    .then(() => console.log("DB connected successfully"))
    .catch((error) => {
      console.log("DB connection failed + " + error);
    });
};