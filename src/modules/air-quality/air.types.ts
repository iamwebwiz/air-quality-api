export interface GivenZoneResponse {
  Result: {
    Pollution: {
      ts: string;
      aqius: number;
      mainus: string;
      aqicn: number;
      maincn: string;
    };
  };
}

export interface AirQualityResponse {
  status: string;
  data: {
    city: string;
    state: string;
    country: string;
    location: {
      type: string;
      coordinates: [number, number];
    };
    current: {
      pollution: {
        ts: string;
        aqius: number;
        mainus: string;
        aqicn: number;
        maincn: string;
      };
      weather: {
        ts: string;
        tp: number;
        pr: number;
        hu: number;
        ws: number;
        wd: number;
        ic: string;
      };
    };
  };
}
