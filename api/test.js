import { connectDB } from "./_db.js";
export async function handler(req, res) {
  await connectDB();
  res.status(200).json({ message: "API is working!" });
}