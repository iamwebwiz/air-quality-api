import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { IQAirService } from "./services/iqair.service";

export default class AirQualityController {
  static async getForZone(req: Request, res: Response) {
    const errors = validationResult(req);
    const data = matchedData(req, { locations: ["query"] });

    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ status: "validation_error", errors: errors.array() });
    }

    const response = await new IQAirService(
      data.longitude,
      data.latitude
    ).Get();

    return res.json(response);
  }
}
