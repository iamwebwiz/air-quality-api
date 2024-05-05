import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import apiRoutes from "./routes";
import config from "./common/config";

const app = express();
const port = config.Port;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

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
