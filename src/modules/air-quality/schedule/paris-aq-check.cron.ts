import AirQuality from "../models/air-quality.model";
import IQAirService from "../services/iqair.service";

export const checkParisAirQuality = async () => {
  console.log("Fetching Paris air quality...");

  const latitude = 48.856613;
  const longitude = 2.352222;

  const response = await new IQAirService(longitude, latitude).Get();

  const airQuality = new AirQuality({
    city: response.city,
    state: response.state,
    country: response.country,
    longitude,
    latitude,
    location: response.location,
    pollution: response.current.pollution,
  });

  await airQuality.save();

  console.log("Fetched Paris air quality ✅");
};
