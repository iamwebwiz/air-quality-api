import { Schema, model } from "mongoose";
import { IAirQualityRecord } from "../air.types";

const schema = new Schema<IAirQualityRecord>(
  {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pollution: { required: true },
  },
  { timestamps: true }
);

const AirQuality = model<IAirQualityRecord>("AirQuality", schema);

export default AirQuality;
