import { Router } from "express";
import { rules } from "./air.rules";
import AirQualityController from "./air.controller";

const router = Router();

router.get("/", rules, AirQualityController.getForZone);

router.get("/most-polluted", () => {});

export default router;
