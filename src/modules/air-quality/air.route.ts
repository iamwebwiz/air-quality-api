import { Request, Response, Router } from "express";
import { rules } from "./air.rules";

const router = Router();

router.get("/:longitude/:latitude", rules, (req: Request, res: Response) => {
  return res.json({
    status: "success",
    message: "It works good!",
    data: [],
  });
});

export default router;
