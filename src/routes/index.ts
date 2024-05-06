import express, { Request, Response } from "express";
import { default as AirRoutes } from "../modules/air-quality/air.routes";

const app = express();

app.use("/air-quality", AirRoutes);

app.get("/status", (req: Request, res: Response) => {
  return res.json({
    status: "success",
    message: "Air Quality API v1",
  });
});

export default app;
