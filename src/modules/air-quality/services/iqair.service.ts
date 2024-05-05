import axios from "axios";
import config from "../../../common/config";
import { AirQualityResponse, GivenZoneResponse } from "../air.types";
import { AirQualityServiceInterface } from "./air-service.interface";

export class IQAirService implements AirQualityServiceInterface {
  static BaseUrl: string = "https://api.airvisual.com/v2/nearest_city";
  static ApiKey: string = config.ApiKey;

  private longitude: string;
  private latitude: string;

  constructor(longitude: string, latitude: string) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  async Get(): Promise<GivenZoneResponse> {
    const res = await axios.get(IQAirService.BaseUrl, {
      params: {
        lat: this.latitude,
        lon: this.longitude,
        key: IQAirService.ApiKey,
      },
    });

    return this.getFormattedResponse(res.data.data);
  }

  private getFormattedResponse(data: AirQualityResponse): GivenZoneResponse {
    return {
      Result: {
        Pollution: data.current.pollution,
      },
    };
  }
}
