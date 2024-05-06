import axios from "axios";
import config from "../../../common/config";
import {
  AirQualityResponse,
  CoordinateType,
  GivenZoneResponse,
} from "../air.types";
import { AirQualityServiceInterface } from "./air-service.interface";

export default class IQAirService implements AirQualityServiceInterface {
  static baseUrl: string = "https://api.airvisual.com/v2/nearest_city";
  static apiKey: string = config.apiKey;

  private longitude: number;
  private latitude: number;

  constructor(longitude: CoordinateType, latitude: CoordinateType) {
    this.longitude = +longitude;
    this.latitude = +latitude;
  }

  async getAirQuality(): Promise<AirQualityResponse> {
    const res = await axios.get(IQAirService.baseUrl, {
      params: {
        lat: this.latitude,
        lon: this.longitude,
        key: IQAirService.apiKey,
      },
    });

    return res.data.data;
  }

  static getFormattedResponse(data: AirQualityResponse): GivenZoneResponse {
    return {
      Result: {
        Pollution: data.current.pollution,
      },
    };
  }
}
