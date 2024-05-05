import { Router } from "express";
import { rules } from "./air.rules";
import AirQualityController from "./air.controller";

const router = Router();

router.get("/:longitude/:latitude", rules, AirQualityController.getForZone);

export default router;
