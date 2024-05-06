import IQAirService from "../services/iqair.service";

export const checkParisAirQuality = async () => {
  const latitude = 48.856613;
  const longitude = 2.352222;

  const response = await new IQAirService(longitude, latitude).Get();
};
