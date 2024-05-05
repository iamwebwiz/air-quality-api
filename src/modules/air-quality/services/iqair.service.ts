import config from "../../../common/config";

export class IQAirService implements AirQualityServiceInterface {
  static ApiKey: string = config.ApiKey;
  private longitude: number;
  private latitude: number;

  constructor(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  get(): void {
    //
  }
}
