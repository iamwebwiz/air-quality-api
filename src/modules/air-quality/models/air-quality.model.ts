import { Schema, model } from "mongoose";
import { IAirQualityRecord } from "../air.types";

const schema = new Schema<IAirQualityRecord>(
  {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    location: { type: Schema.Types.Mixed, required: true },
    pollution: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

const AirQuality = model<IAirQualityRecord>("AirQuality", schema);

export default AirQuality;
