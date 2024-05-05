import fetch from "node-fetch";
import config from "../../../common/config";
import { AirQualityResponse, GivenZoneResponse } from "../air.types";

export class IQAirService implements AirQualityServiceInterface {
  static BaseUrl: string = "https://api.airvisual.com/v2/nearest_city";
  static ApiKey: string = config.ApiKey;

  private longitude: string;
  private latitude: string;

  constructor(longitude: string, latitude: string) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  private buildUrl(): string {
    return `${IQAirService.BaseUrl}?lat=${this.latitude}&lon=${this.longitude}&key=${IQAirService.ApiKey}`;
  }

  async Get(): Promise<GivenZoneResponse> {
    const res = await fetch(this.buildUrl());
    const data = await res.json();

    return this.getFormattedResponse(data);
  }

  private getFormattedResponse(data: AirQualityResponse): GivenZoneResponse {
    return {
      Result: {
        Pollution: data?.data.current.pollution,
      },
    };
  }
}
