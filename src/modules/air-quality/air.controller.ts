import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import IQAirService from "./services/iqair.service";
import { AirQualityResponse } from "./air.types";
import AirQuality from "./models/air-quality.model";

export default class AirQualityController {
  static async getForZone(req: Request, res: Response) {
    const errors = validationResult(req);
    const data = matchedData(req, { locations: ["query"] });

    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ status: "validation_error", errors: errors.array() });
    }

    const response: AirQualityResponse = await new IQAirService(
      data.longitude,
      data.latitude
    ).getAirQuality();

    return res.json(IQAirService.getFormattedResponse(response));
  }

  static async getMostPollutedTimestamp(req: Request, res: Response) {
    try {
      const record = await AirQuality.findOne()
        .sort({ "pollution.aqius": -1 })
        .exec();

      const timestamp = record?.pollution.ts!;

      return res.json({
        Result: {
          Date: new Date(timestamp).toDateString(),
          Time: new Date(timestamp).toTimeString(),
        },
      });
    } catch (err) {
      console.error("Error occured while querying:", err);
    }
  }
}
