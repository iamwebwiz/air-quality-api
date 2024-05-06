import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import apiRoutes from "./routes";
import config from "./common/config";
import nodeCron from "node-cron";
import { checkParisAirQuality } from "./modules/air-quality/schedule/paris-aq-check.cron";
import { connectToDatabase } from "./common/database";

const app = express();
const port = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

connectToDatabase();

nodeCron.schedule("* * * * *", checkParisAirQuality); // schedule job for every minute

app.use("/api", apiRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  return res.status(500).json({
    status: "server_error",
    message: "Whoops! Something went wrong.",
  });
});

app.use("*", (_, res: Response) => {
  return res.status(404).json({
    status: "not_found",
    message: "Whoops! Invalid endpoint.",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
