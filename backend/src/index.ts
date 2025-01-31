import express, { Application } from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route"; // Ensure this path is correct and the file exists

dotenv.config();
const app: Application = express();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is runing on port http://localhost:${PORT}`);
});
