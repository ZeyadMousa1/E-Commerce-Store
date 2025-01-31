import express, { Request, Response } from "express";

const router = express.Router();

router.get("/signup", (req: Request, res: Response) => {
  res.json({
    message: "signup route called",
  });
});

export default router;
