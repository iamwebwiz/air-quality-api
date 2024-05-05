import { Request, Response } from "express";
import { validationResult } from "express-validator";
import config from "../../common/config";

export default class AirQualityController {
  static getForZone(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ status: "validation_error", errors: errors.array() });
    }

    return res.json({
      status: "success",
      message: "It works good!",
      data: {
        ApiKey: config.ApiKey,
      },
    });
  }
}
